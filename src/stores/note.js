import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note', {
  state: () => ({
    notes: [
      {
        id: 1,
        title: 'New note',
        content: 'This is a new note',
      },
    ],
  }),
  actions: {
    addNote () {
      const note = {
        id: this.notes.length + 1,
        title: 'New note',
        content: 'This is a new note',
      }
      this.notes.push(note)
    },
    deleteNote (id) {
      this.notes = this.notes.filter((note) => note.id != id)
      if (this.notes.length === 0) {
        this.addNote()
      }
    },
    updateNoteContent(content, id) {
      this.notes[id-1].content = content
  },
    updateNoteTitle (title, id) {
      this.notes[id-1].title = title
    },
  },
})
