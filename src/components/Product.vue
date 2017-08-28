<template>
  <div class="product">
    <img :src="info.image_url" :alt="info.name">
    <router-link :to="`/products/${info.id}`">
      <h4 class="title is-4">{{ info.name }} ${{ info.price }}</h4>
    </router-link>
    <button @click.prevent="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: 'product',

  props: ['info'],

  methods: {
    addToCart () {
      let newItem = {
        name: this.info.name,
        price: this.info.price
      }

      this.$store.commit('addItem', newItem)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 40em;
  height: auto;
}
</style>
