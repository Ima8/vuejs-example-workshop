<template>
  <div class="container">
    <nav class="navbar ">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <span class="icon">
            <i class="fa fa-home"></i>
          </span>
          Home
        </router-link>

        <router-link class="navbar-item" to="/about">
          <span class="icon">
            <i class="fa fa-bars"></i>
          </span>
          About
        </router-link>

        <router-link class="navbar-item" to="/cart">
          <span class="icon">
            <i class="fa fa-shopping-cart"></i>
          </span>
          Cart ({{ cartItemsCount }})
        </router-link>

        <div class="navbar-burger burger" data-target="navMenubd-example">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
        </div>

        <div class="navbar-end">
          <a href="#" class="navbar-item">Login</a>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  name: 'menubar',
  computed: {
    ...mapGetters([
      'cartItemsCount'
    ])
  }
}
</script>

<style scoped>
nav {
  border: solid 1px green;
  margin-bottom: 2em;
}

i {
  font-size: 1em!important;
}
</style>

