<template>
  <v-layout row wrap>
    <v-card-title @click="lool" class="looool pa-0">$</v-card-title>
    <v-flex xs12>
      <v-layout justify-center row wrap>
        <v-flex
          v-for="(notes, key) in noteRows"
          :key="`notes-note-${key}`"
          :class="`xs${ 12 / numberOfRows }`"
        >
          <v-card
            v-for="note in notes"
            :key="`key-note-${note.id}`"
            class="ma-3 cardNote"
          >
            <v-list-tile-title class="ma-2 cardTitle">{{ note.title }}</v-list-tile-title>
            <v-divider></v-divider>
            <v-card-text class="cardTexte" v-html="formatedText(note.texte)"></v-card-text>
            <v-card-actions>

              <v-btn icon @click="editNote(note.id)">
                <v-icon color="primary">edit</v-icon>
              </v-btn>
              <v-btn icon @click="deleteNote(note)">
                <v-icon color="error">delete</v-icon>
              </v-btn>
              
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>

    <edit-note></edit-note>

  </v-layout>
</template>

<script>
import EditNote from '@/components/EditNote'
import { mapGetters } from 'vuex'
import HarlemShake from '@/model/HarlemShake'

export default {
  name: 'Keep',
  components: {
    EditNote
  },
  props: {
  },
  mounted () {
    this.$store.dispatch('loadNotes')
    this.updateNumberOfRows()
  },
  data () {
    return {
      noteRows: {},
      numberOfRows: 3
    }
  },
  watch: {
    'notes' () {
      this.setNoteRows()
    },
    'numberOfRows' () {
      this.setNoteRows()
    },
    '$vuetify.breakpoint.name' () {
      this.updateNumberOfRows()
    }
  },
  methods: {
    lool () {
      new HarlemShake({
        singleDancer: '.v-card',
        allDancer: ['p', 'img', 'a', 'label', '.list__tile__title', '.v-btn', '.v-card']
      }).start()
    },
    formatedText (texte) {
      if (texte.length > 300) {
        const newText = texte.substr(0, 299)

        return newText + ' ...'
      } else {
        return texte
      }
    },
    deleteNote (note) {
      note.delete()
    },
    editNote (noteId) {
      this.$store.dispatch('setNoteIdEdit', noteId)
      this.$store.dispatch('setDisplayEdit', true)
    },
    setNoteRows () {
      if (this.numberOfRows > 0) {
        this.noteRows = {}

        for (let i = 0; i < this.numberOfRows; i++) {
          this.noteRows[i] = []
        }

        this.notes.map((note, index) => {
          const key = index % this.numberOfRows

          this.noteRows[key].push(note)
        })
      }
    },
    updateNumberOfRows () {
      const size = this.$vuetify.breakpoint.name

      if (size === 'xs') {
        this.numberOfRows = 2
      } else {
        this.numberOfRows = 3
      }
    }
  },
  computed: {
    ...mapGetters({
      notes: 'notes'
    })
  }
}
</script>

<style scoped>

.cardNote {
  overflow-x: scroll !important;
}

.cardTitle {
  font-weight: 500;
  text-align: center;
  width: 80%;
  margin: auto;
}

.cardTexte {
  white-space: pre-wrap;
}

.looool {
  position: fixed !important;
  top: 0px;
  left: 50%;
  z-index: 150;
}

</style>
