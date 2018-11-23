import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: ''
  },
  mutations: {
    saveInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    saveInfo (store, userInfo) {
      store.commit('saveInfo', JSON.stringify(userInfo))
    }
  }
})
