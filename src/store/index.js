import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cartItems: []
}

const mutations = {
  addItem: (state, newItem) => state.cartItems.push(newItem),
  clearCart: (state) => state.cartItems = []
}

const actions = {}

const getters = {
  cartItems: state => state.cartItems,
  cartItemsCount: state => state.cartItems.length
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
