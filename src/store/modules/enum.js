import { getEnums } from '@/apis/enum'

const state = {
  enumTypes: []
}

const mutations = {
  SET_ENUMS: (state, enums) => {
    state.enumTypes = enums.enumTypes
  },
}

const actions = {
  getEnums({ commit }) {
    return new Promise((resolve, reject) => {
      getEnums().then(data => {
        const { enumTypes } = data
        commit('SET_ENUMS', {
          enumTypes
        })
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
