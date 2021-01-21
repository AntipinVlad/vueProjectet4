export default {
    state: {
        title: 'Notes App',
        search: '',
        message: null,
        grid: true,
        searchHolder: 'Find your note',
        filtredNotes: null,
        notes: [
            {
                id: 0,
                title: "First Note",
                descr: "Description for first note",
                priority: "important",
                date: new Date(Date.now()).toLocaleString(),
            },
            {
                id: 1,
                title: "Second Note",
                descr: "Description for second note",
                priority: "normal",
                date: new Date(Date.now()).toLocaleString(),
            },
            {
                id: 2,
                title: "Third Note",
                descr: "Description for third note",
                priority: "never-mind",
                date: new Date(Date.now()).toLocaleString(),
            },
        ],
    },
    mutations: {
        setSearch(state, payload) {
            let array = state.notes;
            let search = payload
            if (!search) state.filtredNotes = array;
            //search toLowerCase
            search = search.trim().toLowerCase();
            array = array.filter(el => {
                if (el.title.toLowerCase().indexOf(search) !== -1) return el;
            })
            state.filtredNotes = array;
        },
        setGrid(state) {
            state.grid = !state.grid
        },
        setAddNote(state, payload) {
            let { title, descr, priority } = payload;
            let id = state.notes.length
            if (title === "") {
                state.message = "title can`t be blank!";
              return false;
            }
            state.notes.push({
              id,
              title,
              descr,
              priority,
              date: new Date(Date.now()).toLocaleString(),
            });
            state.message = null;
        },
        setRemoveNote (state, payload) {
            state.notes = state.notes.filter(el => { if(el.id !== payload) return true });
        }
    },
    getters: {
        getTitle(state) {
            return state.title
        },
        getSearchHolder(state) {
            return state.searchHolder
        },
        getEdit(state) {
            return state.edit
        },
        getNotes(state) {
            if (!state.filtredNotes){
                return state.notes
            }else{
                return state.filtredNotes
            }
        },
        getSearch(state) {
            return state.search
        },
        getMessage(state) {
            return state.message
        },
        getGrid(state) {
            return state.grid
        },
        getNote(state) {
            return state.note
        },
    }
}