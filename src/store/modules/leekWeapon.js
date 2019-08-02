import * as types from '@/store/mutationTypes'

const state = {
  leekWeapon: []
}

const mutations = {
  [types.ADD_LEEKWEAPON_TO_LIST] (state, leekWeapon) {
    state.leekWeapon.push(leekWeapon)
  }
}

const actions = {
  addLeekWeapon ({commit}, leekWeapon) {
    if (leekWeapon) {
      // note._id = note.id
      commit(types.ADD_LEEKWEAPON_TO_LIST, leekWeapon)
    }
  }
}

const getters = {
  getLeekWeapon: state => state.leekWeapon
}

export default {
  state,
  getters,
  mutations,
  actions
}
