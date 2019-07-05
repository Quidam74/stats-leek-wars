import $ from 'axios'
import store from '@/store'

const status = Object.freeze({
  NONE: 'none',
  UPDATING: 'updated',
  CREATED: 'created'
})

class Note {
  constructor ({ _id = null, title = '', texte = '', createdDate = null }) {
    this.id = _id
    this.title = title
    this.texte = texte
    this.createdDate = createdDate

    if (this.id === null) {
      this.status = status.NONE
    } else {
      this.status = status.CREATED
    }
  }

  async create () {
    if (this.status !== status.UPDATING) {
      this.status = status.UPDATING

      return new Promise(async (resolve, reject) => {
        try {
          const result = await $.post('https://b2b18879.ngrok.io/api/notes', {
            title: this.title,
            texte: this.texte
          })

          if (result.status >= 200 && result.status < 400) {
            this.id = result.data._id
            this.createdDate = result.data.createdDate

            this.status = status.CREATED
            resolve(true)
          } else {
            this.status = status.NONE
            resolve(false)
          }
        } catch (error) {
          this.status = status.NONE
          console.error('[Note:create]', error)
          reject(error)
        }
      })
    }
  }

  async update () {
    if (this.isValide()) {
      if (this.status === status.NONE) {
        // create note
        await this.create()
        store.dispatch('addNote', this)
      } else {
        // Update note
        if (this.status !== status.UPDATING) {
          this.status = status.UPDATING

          try {
            await $.put(`https://b2b18879.ngrok.io/api/note/${this.id}`, {
              title: this.title,
              texte: this.texte
            })
          } catch (error) {
            console.error('[Note:update]', error)
          }

          this.status = status.CREATED
          store.dispatch('updateNote', this)
        }
      }
    }
  }

  async delete () {
    try {
      const res = await $.delete(`https://b2b18879.ngrok.io/api/note/${this.id}`)

      if (res.status === 200) {
        store.dispatch('deleteNote', this.id)
      }
    } catch (error) {
      console.error('[Note:delete]', error)
    }
  }

  isValide () {
    return this.title.length !== 0 || this.texte.length !== 0
  }
}

export default Note
