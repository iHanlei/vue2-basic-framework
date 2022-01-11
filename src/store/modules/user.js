import { login, getUserInfo } from "@/apis/user";
import {
  getToken,
  setToken,
  removeToken,
} from "@/utils/storage";

const state = {
  token: getToken(),
  userInfo: {},
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo;
  },
  LOGOUT: (state) => {
    state.token = getToken();
    state.userInfo = {};
  },
};

const actions = {
  login({ commit }, requestData) {
    return new Promise((resolve, reject) => {
      login(requestData)
        .then((data) => {
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then((data) => {
          const { userId, userName, email, avatar, permissionList } = data;
          commit("SET_USERINFO", {
            userId,
            userName,
            email,
            avatar,
            permissionList
          });
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve) => {
      removeToken();
      commit("LOGOUT");
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
