import Vue from 'vue'
import Vuex from 'vuex'

import leekWeapon from './modules/leekWeapon'
import leekChip from './modules/leekChip'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    leekWeapon,
    leekChip
  }
})
