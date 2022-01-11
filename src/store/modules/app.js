import { getLanguage } from '@/lang/index'
import { setLang } from '@/utils/storage'

const state = {
  language: getLanguage()
}

const mutations = {
  SET_LANGUAGE: (state, language) => {
    state.language = language
  }
}

const actions = {
  setLanguage({ commit }, language) {
    commit('SET_LANGUAGE', language)
    setLang(language)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
