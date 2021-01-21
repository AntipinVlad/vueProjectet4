<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">VUE CLI</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="(link, index) in links" :key="index">
                <router-link :title="link.title" :to="link.url">{{ link.title }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>

  </div>
</template>

<script>

export default { 
  data () {
    return {
      links:[
        {title: 'Home', url: '/'},
        {title: 'Shop', url: '/shop'},
      ]
    }
  }
};
</script>

<style lang="scss">
.navbar-item{
  &.router-link-exact-active{
    color: #6ff;
  }
}
</style>