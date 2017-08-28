<template>
  <div class="main-page">
    <div class="container">
      <h1 class="title">{{ product.name }}</h1>
      <Product :info="product"></Product>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product'

export default {
  name: 'product-page',

  components: {
    Product
  },

  data () {
    return {
      product: {}
    }
  },

  async mounted () {
    let id = this.$route.params.id
    let response = await this.$http.get(`/items/${id}`)
    this.product = response.data
  }
}
</script>

<style scoped>
</style>
