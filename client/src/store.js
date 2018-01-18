import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      }
      else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    generateUserKebab (state) {
      console.log('generating')
    }
  },
  actions: {
    setUserInfo ({commit}, userInfo) {
      commit('setToken', userInfo.token)
      commit('setUser', userInfo.user)
      commit('generateUserKebab')
      // when that's done, redirect to profile with user kebab
    }
  }
})
