<script>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import NoteView from './views/NoteView.vue';
import { useNoteStore } from '@/stores/note';

export default {
  name: 'App',
  setup() {
    const noteStore = useNoteStore();
    return {
      noteStore,
    }
  },
  components: {
    NavBar,
    NoteView,
    RouterView
  },
  data() {
    return {
      note: this.noteStore.notes[0]
    }
  },
  methods: {
    openNote(note) {
      this.note = note;
    }
  }
}
</script>

<template>
  <NavBar @openNote="openNote" />
  <NoteView :note="this.note" />
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
}
</style>