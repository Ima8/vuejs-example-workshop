<template>
  <div class="main-page">
    <div class="container">
      <h1 class="title">Our glasses</h1>

      <div v-for="product in products" :key="product.id" class="product">
        <Product :info="product"></Product>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product'

export default {
  name: 'main-page',

  components: {
    Product
  },

  data () {
    return {
      products: []
    }
  },

  async mounted () {
    let response = await this.$http.get('/items')
    this.products = response.data
  }
}
</script>

<style scoped>
</style>
