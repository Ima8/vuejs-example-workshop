<template>
  <div class="main-page">
    <div class="container">
      <h1 class="title">Cart</h1>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - {{ item.price }}
        </li>
      </ul>

      <button @click="clearCart">clear</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'cart-page',

  data () {
    return {}
  },

  methods: {
    ...mapMutations([
      'clearCart'
    ])
  },

  computed: {
    cartItems () {
      return this.$store.getters.cartItems
    }

    // ...mapGetters([
    //   'cartItems'
    // ])
  }
}
</script>

<style scoped>
</style>
