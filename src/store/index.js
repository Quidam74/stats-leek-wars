import Vue from 'vue'
import Vuex from 'vuex'

import notes from '@/store/modules/notes'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    notes
  }
})
