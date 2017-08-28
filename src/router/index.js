import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import About from '@/pages/About'
import Cart from '@/pages/Cart'
import Product from '@/pages/Product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Main', component: Main },
    { path: '/products/:id', name: 'Product', component: Product },
    { path: '/about', name: 'About', component: About },
    { path: '/cart', name: 'Cart', component: Cart }
  ]
})
