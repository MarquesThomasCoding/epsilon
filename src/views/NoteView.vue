<script>
import { useNoteStore } from '@/stores/note';

export default {
    name: 'NoteView',
    setup() {
        const noteStore = useNoteStore();
        return {
        noteStore,
        }
    },
    props: {
        note: Object
    },
    computed: {
        thisNote() {
            return this.note;
        }
    },
    methods: {
        deleteNote() {
            this.noteStore.delete(this.thisNote.id);
        },
        updateNoteContent() {
            this.noteStore.updateNoteContent(this.thisNote.content, this.thisNote.id);
        },
        updateNoteTitle() {
            this.noteStore.updateNoteTitle(this.thisNote.title, this.thisNote.id);
        }
    }
}
</script>

<template>
    <main>
        <input name="note-title" v-model="thisNote.title" @change="updateNoteTitle()" />
        <textarea name="note-content" v-model="thisNote.content" @change="updateNoteContent()" cols="30" rows="10"></textarea>
    </main>
</template>

<style scoped>
main {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
}

input {
    width: 100%;
    padding: 10px;
    font-size: 1.5rem;
    border: none;
    border-bottom: 1px solid #000;
    background-color: #171717;
    color: #fff;
    outline: none;
}

textarea {
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 1rem;
    border: none;
    background-color: #171717;
    color: #fff;
    resize: none;
    outline: none;
}
</style>