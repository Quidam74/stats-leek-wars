<template>
  <div>
    <v-dialog
      v-if="note !== null"
      v-model="display"
    >
      <v-card class="px-5">
        <v-card-title class="editNoteTitle">Edit note</v-card-title>
        <v-text-field
          v-model="note.title"
          label="Title"
        ></v-text-field>

        <v-textarea
          v-model="note.texte"
          label="Note"
          auto-grow
          rows="10"
        ></v-textarea>

        <v-card-actions class="editNoteActions">
          <v-btn light color="primary" @click="saveNote" :disabled="!note.isValide()">save</v-btn>
          <v-btn light color="error" @click="deleteNote" :disabled="note.id === null">delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-btn
      :disabled="display"
      fixed
      bottom
      right
      fab
      dark
      color="error"
      @click="newNote"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import Note from '@/model/Note'

export default {
  name: 'edit-note',
  components: {
  },
  props: {
  },
  mounted () {
    this.backHandler = (ev) => {
      if (this.display) {
        ev.preventDefault()
        this.display = false
      }
    }
  },
  data () {
    return {
      handler: null,
      backHandler: () => {},
      note: new Note({})
    }
  },
  watch: {
    'display' () {
      if (this.display) {
        window.addEventListener('backbutton', this.backHandler, false)

        const noteId = this.$store.getters.noteIdEdit
        if (noteId) {
          const note = this.$store.getters.notes.find(el => el.id === noteId)
          if (note) {
            note._id = note.id
            this.note = new Note({ ...note })
            this.$store.dispatch('setNoteIdEdit', null)
          }
        }
      } else {
        window.removeEventListener('backbutton', this.backHandler, false)
      }
    },
    'note.title' () {
      this.update()
    },
    'note.texte' () {
      this.update()
    }
  },
  methods: {
    update () {
      clearTimeout(this.handler)

      this.handler = setTimeout(() => {
        this.note.update()
      }, 500)
    },
    newNote () {
      this.display = true
      this.note = new Note({})
    },
    deleteNote () {
      clearInterval(this.handler)

      this.note.delete()
      this.display = false
    },
    saveNote () {
      clearInterval(this.handler)

      this.note.update()
      this.display = false
    }
  },
  computed: {
    display: {
      get () {
        return this.$store.getters.displayEdit
      },
      set (value) {
        this.$store.dispatch('setDisplayEdit', value)
      }
    }
  }
}
</script>

<style scoped>

.editNoteTitle {
  font-weight: 500;
  font-size: 1.1rem;

  text-align: center;
  display: block !important;
}

.editNoteActions {
  text-align: center;
  display: block;
}

</style>
