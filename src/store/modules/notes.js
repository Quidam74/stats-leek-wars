import * as types from '@/store/mutationTypes'
import $ from 'axios'
import Note from '@/model/Note'

const state = {
  notes: [],
  noteIdEdit: null,
  displayEdit: false
}

const mutations = {
  [types.SET_NOTES_LIST] (state, notes) {
    if (notes) {
      state.notes = notes
    }
  },
  [types.ADD_NOTE_TO_LIST] (state, note) {
    state.notes.push(note)
  },
  [types.UPDATE_NOTE_IN_LIST] (state, note) {
    const index = state.notes.findIndex(el => el.id === note.id)
    if (index >= 0) {
      state.notes.splice(index, 1, note)
    }
  },
  [types.DELETE_NOTE_IN_LIST] (state, noteId) {
    const index = state.notes.findIndex(el => el.id === noteId)
    if (index >= 0) {
      state.notes.splice(index, 1)
    }
  },
  [types.SET_NOTE_ID_EDIT] (state, noteId) {
    state.noteIdEdit = noteId
  },
  [types.SET_DISPLAY_EDIT] (state, display) {
    state.displayEdit = display
  }
}

const actions = {
  loadNotes ({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await $.get('https://b2b18879.ngrok.io/api/notes')

        if (res.status >= 200 && res.status < 400) {
          const notes = []
          if (res && res.data) {
            res.data.map(note => {
              notes.push(new Note(note))
            })
          }

          commit(types.SET_NOTES_LIST, notes)
          resolve(notes)
        } else {
          res = {
            'notes': [
              {
                '_id': '5c330ccbd47c3d25297e56fb',
                'title': 'Ceci est un titre',
                'texte': 'sq,flkj <sh snqdh sqdhc sdnc snpd',
                'createdDate': '2019-01-07T08:24:43.109Z',
                '__v': 0
              },
              {
                '_id': '5c330cccd47c3d25297e56fc',
                'title': 'Ceci est un titre',
                'texte': 'sq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdsq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snpdsq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snpdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snq,flkj <sh snqdh sqdhc sdnc snpd',
                'createdDate': '2019-01-07T08:24:44.262Z',
                '__v': 0
              },
              {
                '_id': '5c330cccd47c3d25297e56fd',
                'title': 'Ceci est un titre',
                'texte': 'sq,flkj <sh snqdh sqdhc sdnc snpd',
                'createdDate': '2019-01-07T08:24:44.670Z',
                '__v': 0
              },
              {
                '_id': '5c3312b79264bb28e2cfaa9b',
                'title': 'Ceci est un titre',
                'texte': 'sq,flkj <sh snqdh sqdhc sdnc snpd',
                'createdDate': '2019-01-07T08:49:59.228Z',
                '__v': 0
              }
            ]
          }

          const notes = []
          if (res && res.notes) {
            res.notes.map(note => {
              notes.push(new Note(note))
            })
          }

          commit(types.SET_NOTES_LIST, notes)
          resolve(notes)
        }
      } catch (error) {
        console.error('[Notes.action.loadNotes]', error)
        reject(error)
      }
    })
  },
  addNote ({ commit }, note) {
    if (note) {
      note._id = note.id
      commit(types.ADD_NOTE_TO_LIST, new Note(note))
    }
  },
  updateNote ({ commit }, note) {
    if (note) {
      note._id = note.id
      commit(types.UPDATE_NOTE_IN_LIST, new Note(note))
    }
  },
  deleteNote ({ commit }, noteId) {
    if (noteId) {
      commit(types.DELETE_NOTE_IN_LIST, noteId)
    }
  },
  setNoteIdEdit ({ commit }, noteId) {
    commit(types.SET_NOTE_ID_EDIT, noteId)
  },
  setDisplayEdit ({ commit }, state) {
    if (state !== null && state !== undefined) {
      commit(types.SET_DISPLAY_EDIT, state)
    }
  }
}

const getters = {
  notes: state => state.notes,
  noteIdEdit: state => state.noteIdEdit,
  displayEdit: state => state.displayEdit
}

export default {
  state,
  getters,
  mutations,
  actions
}
