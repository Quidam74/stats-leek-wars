import * as types from '@/store/mutationTypes'

const state = {
  leekWeapon: []
}

const mutations = {
  [types.ADD_LEEKWEAPON_TO_LIST] (state, leekWeapon) {
    if (!state.leekWeapon.includes(leekWeapon)) {
      state.leekWeapon.push(leekWeapon)
    } else {
      console.log('error to many chips')
    }
  },
  [types.REMOVE_LEEKWEAPON_TO_LIST] (state, leekWeapon) {
    let index = state.leekWeapon.indexOf(leekWeapon)
    state.leekWeapon.splice(index, 1)
  },
  [types.REMOVE_LEEKWEAPON_SUB_TO_LEVEL] (state, level) {
    state.leekWeapon = state.leekWeapon.filter(elem => elem.level <= level)
    console.log(state.leekWeapon)
  }
}

const actions = {
  addLeekWeapon ({commit}, leekWeapon) {
    if (leekWeapon) {
      // note._id = note.id
      commit(types.ADD_LEEKWEAPON_TO_LIST, leekWeapon)
    }
  },
  removeLeekWeapon ({commit}, leekWeapon) {
    if (leekWeapon) {
      commit(types.REMOVE_LEEKWEAPON_TO_LIST, leekWeapon)
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
