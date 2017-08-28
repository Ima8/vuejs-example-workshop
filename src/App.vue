<template>
  <div id="app">
    <Menubar></Menubar>
    <router-view></router-view>
  </div>
</template>

<script>
import Menubar from '@/components/Menubar'

export default {
  name: 'app',
  components: {
    Menubar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 2em auto;
  max-width: 80em;
}
</style>
