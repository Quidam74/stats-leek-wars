import * as types from '@/store/mutationTypes'

const state = {
  leekChip: []
}

const mutations = {
  [types.ADD_LEEKCHIP_TO_LIST] (state, leekChip) {
    if (!state.leekChip.includes(leekChip)) {
      state.leekChip.push(leekChip)
    } else {
      console.log('error too many chips')
    }
  },
  [types.REMOVE_LEEKCHIP_TO_LIST] (state, leekChip) {
    let index = state.leekChip.indexOf(leekChip)
    state.leekChip.splice(index, 1)
  },
  [types.REMOVE_LEEKCHIP_SUB_TO_LEVEL] (state, level) {
    state.leekChip = state.leekChip.filter(elem => elem.level <= level)
  }
}

const actions = {
  addLeekChip ({commit}, leekChip) {
    if (leekChip) {
      // note._id = note.id
      commit(types.ADD_LEEKCHIP_TO_LIST, leekChip)
    }
  },
  removeLeekChip ({commit}, leekChip) {
    if (leekChip) {
      commit(types.REMOVE_LEEKCHIP_TO_LIST, leekChip)
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
