import * as types from '@/store/mutationTypes'

const state = {
  leekChip: []
}

const mutations = {
  [types.ADD_LEEKCHIP_TO_LIST] (state, leekChip) {
    state.leekChip.push(leekChip)
  }
}

const actions = {
  addLeekChip ({commit}, leekChip) {
    if (leekChip) {
      // note._id = note.id
      commit(types.ADD_LEEKCHIP_TO_LIST, leekChip)
    }
  }
}

const getters = {
  getLeekChip: state => state.leekChip
}

export default {
  state,
  getters,
  mutations,
  actions
}
