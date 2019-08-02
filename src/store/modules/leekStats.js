import * as types from '@/store/mutationTypes'

const state = {
  frequency: null,
  life: null,
  magic: null,
  mp: null,
  resistance: null,
  science: null,
  strength: null,
  tp: null,
  wisdom: null
}

const mutations = {
  [types.SET_FREQUENCY] (state, frequency) {
    state.frequency = frequency
  },
  [types.SET_LIFE] (state, life) {
    state.life = life
  },
  [types.SET_MAGIC] (state, magic) {
    state.magic = magic
  },
  [types.SET_MP] (state, mp) {
    state.mp = mp
  },
  [types.SET_RESISTANCE] (state, resistance) {
    state.resistance = resistance
  },
  [types.SET_SCIENCE] (state, science) {
    state.science = science
  },
  [types.SET_STRENGTH] (state, strength) {
    state.strength = strength
  },
  [types.SET_TP] (state, tp) {
    state.tp = tp
  },
  [types.SET_WISDOM] (state, wisdom) {
    state.wisdom = wisdom
  }

}
const actions = {
  setFrequency ({commit}, frequency) {
    if (frequency) {
      commit(types.SET_FREQUENCY, frequency)
    }
  },
  setLife ({commit}, life) {
    if (life) {
      commit(types.SET_LIFE, life)
    }
  },
  setMagic ({commit}, magic) {
    if (magic) {
      commit(types.SET_MAGIC, magic)
    }
  },
  setMp ({commit}, mp) {
    if (mp) {
      commit(types.SET_MP, mp)
    }
  },
  setResistance ({commit}, resistance) {
    if (resistance) {
      commit(types.SET_RESISTANCE, resistance)
    }
  },
  setScience ({commit}, science) {
    if (science) {
      commit(types.SET_SCIENCE, science)
    }
  },
  setStrength ({commit}, strength) {
    if (strength) {
      commit(types.SET_STRENGTH, strength)
    }
  },
  setTp ({commit}, tp) {
    if (tp) {
      commit(types.SET_TP, tp)
    }
  },
  setwisdom ({commit}, wisdom) {
    if (wisdom) {
      commit(types.SET_WISDOM, wisdom)
    }
  }
}

const getters = {
  getFrequency: state => state.frequency,
  getLife: state => state.life,
  getMagic: state => state.magic,
  getMp: state => state.mp,
  getResistance: state => state.resistance,
  getScience: state => state.science,
  getStrength: state => state.strength,
  getTp: state => state.tp,
  getwisdom: state => state.wisdom
}

export default {
  state,
  getters,
  mutations,
  actions
}
