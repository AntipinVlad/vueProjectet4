<template>
  <section class="notes">
    <div
      class="note"
      :class="[{ full: !updatedGrid }, note.priority]"
      v-for="note in updatedNotes"
      :key="note.id"
    >
      <!-- IF-->
      <div v-if="edit != note.id" @dblclick="edit = note.id">
        <div class="note-header" :class="{ full: !updatedGrid }">
          <p>{{ note.title }}</p>
          <p style="cursor: pointer" @click="removeNote(note.id)">X</p>
        </div>
        <div class="note-body">
          <p>{{ note.descr }}</p>
          <span>{{ note.date }}</span>
        </div>
      </div>
      <!-- else -->
      <div v-else>
        <div class="note-header" :class="{ full: !updatedGrid }">
          <input type="text" v-model="note.title" @keyup.enter="updateNote"/>
          <p style="cursor: pointer" @click="removeNote(note.id)">X</p>
        </div>
        <div class="note-body">
          <input type="text" v-model="note.descr" @keyup.enter="updateNote"/>
          <span>{{ note.date }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      edit: null,
      notes: [],
      grid: null,
    };
  },
  computed: {
    updatedNotes() {
      return (this.notes = this.$store.getters.getNotes);
    },
    updatedGrid() {
      return (this.grid = this.$store.getters.getGrid);
    },
    updatedEdit() {
      return (this.edit = this.$store.getters.edit);
    },
  },
  methods: {
    removeNote(id) {
      this.$store.commit("setRemoveNote", id);
    },
    updateNote(){
      let id = this.edit
      let mass = this.notes;
      this.$store.commit('setEdit', {mass, id})
      this.edit = null;
    }
  },
};
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgna(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
  &.important {
    background-color: #ff0000e8;
  }
  &.normal {
    background-color: #eeff00ce;
  }
  &.never-mind {
    background-color: #ecebeb;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 22px;
    color: #402caf;
  }
  svg {
    margin-right: 12px;
    color: #999999;
    &.active {
      color: #402caf;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &.full {
    justify-content: center;
    p {
      margin-left: 20px;
    }
  }
}
.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #747474;
  }
}
</style>