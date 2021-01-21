<template>
  <div class="new-note">
    <label style="font-weight:bold">Title</label>
    <input v-model="note.title" type="text" />
    <label  style="font-weight:bold">Priority</label>
    <div class="radio-btn">
        <div>
            <input type="radio" id="important" value="important" v-model="note.priority">
            <label for="important">Important</label>
        </div>    
        <div>

            <input type="radio" id="normal" value="normal" v-model="note.priority">
            <label for="normal">Normal</label>
        </div>    
        <div>    
            <input type="radio" id="never-mind" value="never-mind" v-model="note.priority">
            <label for="never-mind">Never-mind</label>
        </div>
    </div>
    <label style="font-weight:bold">Description</label>
    <textarea v-model="note.descr"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    note: {
        title: "",
        descr: "",
        priority: ""
      },
    }
  },
  methods: {
    addNote() {
      this.$store.commit("setAddNote", this.note);
      this.note.title = ''
      this.note.descr = ''
      this.note.priority = ''
    },
  },
};
</script>

<style lang="scss">
.new-note {
  text-align: center;
}
.btnPrimary {
  margin: 20px;
}
.radio-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 40px 0;
  div{
      display: flex;
      input{
          width: auto;
          margin: 0 15px;
      }
  }
}
</style>