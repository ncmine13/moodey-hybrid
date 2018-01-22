import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    kebab: String
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
    generateUserKebab (state, user) {
      let kebab = user.email.slice(0, 4) + user.id
      state.kebab = kebab
    }
  },
  actions: {
    setUserInfo (context, userInfo) {
      context.commit('setToken', userInfo.token)
      context.commit('setUser', userInfo.user)
      if (userInfo.user) {
        context.commit('generateUserKebab', userInfo.user)
      }
    }
  }
})
