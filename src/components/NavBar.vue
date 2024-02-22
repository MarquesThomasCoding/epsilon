<script>
import { useNoteStore } from '@/stores/note';


export default {
    name: 'NavBar',
    setup() {
        const noteStore = useNoteStore();
        return {
            noteStore,
        }
    },
    methods: {
        openNote(note) {
            this.$emit('openNote', note);
            let lis = document.querySelectorAll('li.noteNav');
            for (let li of lis) {
                li.classList.remove('active');
            }
            let n = document.getElementById(note.id);
            n.classList.add('active');
        },
        addNote() {
            this.noteStore.addNote();
        },
        deleteNote(id) {
            this.noteStore.deleteNote(id);
            this.openNote(this.noteStore.notes[0]);
        }
    }
}
</script>

<template>
    <nav>
        <ul>
            <li v-for="(note, index) in noteStore.notes" :key="note.id" :id="note.id" class="noteNav" :class="{'active': index === 0}">
                <button v-on:click="openNote(note)">{{ note.title }}</button>
                <button class="deleteBtn" v-on:click="deleteNote(note.id)">x</button>
            </li>
            <li>
                <button v-on:click="addNote()">+</button>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #0d0d0d;
    overflow-x: scroll;
}

::-webkit-scrollbar {
    width: 5px;
}
::-webkit-scrollbar-track {
    background: #171717;
}
::-webkit-scrollbar-thumb {
    background: #2a2a2a;
}
::-webkit-scrollbar-thumb:hover {
    background: #333;
}

ul {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem;
    padding: 5px;
    padding-bottom: 0;
    margin: 0;
    list-style: none;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: background-color 0.2s;
}

li:hover {
    background-color: #171717;
}

button {
    background-color: transparent;
    border: none;
    color: #fff;
    padding: 0.5rem;
    max-width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    height: 100%;
    cursor: pointer;
}

.deleteBtn:hover {
    background-color: #2a2a2a;
    border-radius: 5px;
}

.active {
    background-color: #171717;
}
</style>