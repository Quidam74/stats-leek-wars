import * as types from '@/store/mutationTypes'

const minLevel = 1
const maxLevel = 301
const minFreq = 100
const minMp = 3
const minTp = 10
const state = {
  level: 1,
  frequency: 100,
  life: 0,
  magic: 0,
  mp: 3,
  resistance: 0,
  science: 0,
  strength: 0,
  tp: 10,
  wisdom: 0,
  agility: 0
}

const mutations = {
  [types.SET_LEVEL] (state, level) {
    state.level = level
  },
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
  },
  [types.SET_AGILITY] (state, agility) {
    state.agility = agility
  }

}
const actions = {
  setLevel ({commit, dispatch}, level) {
    if (level) {
      let setLevel = 1
      if (level >= minLevel && level <= maxLevel) {
        setLevel = level
      } else {
        console.log('error : level out ouf bound')
        if (level > maxLevel) {
          setLevel = maxLevel
        } else if (level < minLevel) {
          setLevel = minLevel
        }
      }
      commit(types.SET_LEVEL, setLevel)
      commit(types.REMOVE_LEEKCHIP_SUB_TO_LEVEL, setLevel)
      commit(types.REMOVE_LEEKWEAPON_SUB_TO_LEVEL, setLevel)
      dispatch('setLife')
    }
  },
  setFrequency ({commit}, frequency) {
    if (frequency) {
      if (frequency >= minFreq) {
        commit(types.SET_FREQUENCY, frequency)
      } else {
        commit(types.SET_FREQUENCY, minFreq)
        console.log('error : frequency out ouf bound')
      }
    }
  },
  setLife ({commit, getters}, life) {
    let minLife = (getters.getLevel - 1) * 3 + 100
    if (life === undefined) {
      commit(types.SET_LIFE, minLife)
    } else if (life >= minLife) {
      commit(types.SET_LIFE, parseInt(life))
    } else {
      commit(types.SET_LIFE, parseInt(minLife))
      console.log('error : life out ouf bound')
    }
  },
  setMagic ({commit}, magic) {
    if (magic && magic >= 0) {
      commit(types.SET_MAGIC, magic)
    }
  },
  setMp ({commit}, mp) {
    if (mp) {
      if (mp >= minMp) {
        commit(types.SET_MP, mp)
      } else {
        commit(types.SET_MP, minMp)
        console.log('error : mp out ouf bound')
      }
    }
  },
  setResistance ({commit}, resistance) {
    if (resistance && resistance >= 0) {
      commit(types.SET_RESISTANCE, resistance)
    }
  },
  setScience ({commit}, science) {
    if (science && science >= 0) {
      commit(types.SET_SCIENCE, science)
    }
  },
  setStrength ({commit}, strength) {
    if (strength && strength >= 0) {
      commit(types.SET_STRENGTH, strength)
    }
  },
  setTp ({commit}, tp) {
    if (tp) {
      if (tp >= minTp) {
        commit(types.SET_TP, tp)
      } else {
        commit(types.SET_TP, minTp)
        console.log('error : tp out ouf bound')
      }
    }
  },
  setWisdom ({commit}, wisdom) {
    if (wisdom && wisdom >= 0) {
      commit(types.SET_WISDOM, wisdom)
    }
  },
  setAgility ({commit}, agility) {
    if (agility && agility >= 0) {
      commit(types.SET_AGILITY, agility)
    }
  }
}

const getters = {
  getLevel: state => state.level,
  getFrequency: state => state.frequency,
  getLife: state => state.life,
  getMagic: state => state.magic,
  getMp: state => state.mp,
  getResistance: state => state.resistance,
  getScience: state => state.science,
  getStrength: state => state.strength,
  getTp: state => state.tp,
  getwisdom: state => state.wisdom,
  getAgility: state => state.agility
}

export default {
  state,
  getters,
  mutations,
  actions
}
