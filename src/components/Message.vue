<template>
  <div class="message">
    <p>{{ getMessage }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    getMessage() {
      return this.$store.getters.getMessage
      console.log(this.$store.getters.getMessage)
    }
  }
}; 
</script>

<style lang="scss" scoped>
.message{
    text-align: center;
    padding: 20px;
}
p{
    color: #ba3838;
}
</style>