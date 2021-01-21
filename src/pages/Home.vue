<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- new message -->
          <message v-if="getMessage" /> <!-- v-if="message" :message="message" -->
          <!-- new note -->
          <new-note /> <!-- :note="note" @addNote="addNote" -->
          <!-- title-->
          <div class="note-header" style="margin: 36px 0">
            <h1>{{ title }}</h1>
            <!-- search -->
            <search />  <!-- :value="search" placeholder="Find your note" @search="search = $event" -->
            <!-- icons controls-->
            <div class="icons">
              <svg :class="{active: getGrid}" @click="setGrid" style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{active: !getGrid}" @click="setGrid" style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>
          <!-- note list -->      
          <notes /> <!-- :notes="notesFilter" :grid="grid" @remove="removeNote" -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from "../components/Message.vue";
import newNote from "../components/NewNote.vue";
import notes from "../components/Notes.vue";
import search from "../components/Search.vue"
export default {
  components: {
    message,
    newNote,
    notes,
    search
  },
    data() {
    return {
      title: "",
    };
  },
   created() {
        // Get defoult parameters
        this.title = this.$store.getters.getTitle
      },
      computed: {
        getGrid(){
          return this.$store.getters.getGrid
        },
        getMessage() {
          return this.$store.getters.getMessage
          console.log(this.$store.getters.getMessage)
    }
      },
      methods:{
        setGrid () {
          this.$store.commit('setGrid');
        }
      }
//   computed:{
//     notesFilter(){
//       let array = this.notes;
//       let search = this.search;
//       if (!search) return array;
//       //search toLowerCase
//       search = search.trim().toLowerCase();
//       array = array.filter(el => {
//         if (el.title.toLowerCase().indexOf(search) !== -1) return el;
//       })
//       return array;
//     },

//   },
//   methods: {
    // addNote() {
    //   let { title, descr, priority } = this.note;
    //   let id = this.notes.length
    //   if (title === "") {
    //     this.message = "title can`t be blank!";
    //     return false;
    //   }
    //   this.notes.push({
    //     id,
    //     title,
    //     descr,
    //     priority,
    //     date: new Date(Date.now()).toLocaleString(),
    //   });
    //   this.message = null;
    //   this.note.title = "";
    //   this.note.descr = "";
    //   this.note.priority = "";
    // },
    // removeNote(id) {
    //    this.notes = this.notes.filter(el => { if(el.id !== id) return true });
    // },
//   },
};
</script>

<style lang="scss" scoped>
.container{
  margin-top: 50px;
  min-width: 80%;
  max-width: 80%;
}
</style>