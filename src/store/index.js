import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  position: {},
  userName: '',
  type: '美食'
};

const mutations = {
  SETPOSITION(state, val) {
    state.position = val
  },
  setUserName(state, val) {
    state.userName = val
  }
};

const actions = {
  setPosition({commit}, val) {
    commit('SETPOSITION', val)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})

