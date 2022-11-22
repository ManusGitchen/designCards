import axios from 'axios'
// import apiRes from '../api.json'
import { createStore } from 'vuex'

export default createStore({
  state: {
    errorMessage: {},
    // If there are more details, it would make sense to split the store in namespaced modules
    products: [],
    filteredProducts: [],
    usersLikes: []
  },
  getters: {
    getAllProducts:(state) => {
      return state.filteredProducts
    },
    getErrorMessage:(state) => {
      return state.errorMessage
    },
    getAllUserLikes:(state) => {
      return state.usersLikes
    }
  },
  mutations: {
    setProducts(state, productData) {
     state.products = productData
    },
    setFilteredProducts(state, productData) {
      state.filteredProducts = productData
     },
    setErrorState(state, errorMsg){
      state.errorMessage = errorMsg
    },
    addLike(state, clickedID) {
      state.usersLikes.push(clickedID)
      const product = state.products.find(product => product.id === clickedID)
      product.likes += 1
    },
    removeLike(state, clickedID) {
      const index = state.usersLikes.indexOf(clickedID);
      if (index > -1) { 
        state.usersLikes.splice(index, 1)
        const product = state.products.find(product => product.id === clickedID)
        product.likes -= 1
      }
    },
  },
  actions: {
    /**
     * @param {*} param0 
     */
    getInitialData({commit,dispatch}) {
      axios.get('http://localhost:8010/proxy')
      .then(response =>{
        let res = response.data
        commit('setProducts', res.payload.data),
        commit('setFilteredProducts', res.payload.data)
      })
  },



    /**
     * 
     * @param {*} product the liked product id
     */
    likeCount({state, commit},likedProduct){
      console.log(likedProduct)
      state.products.findIndex(product => product.id === likedProduct.id)
    },
    sortProducts({state, commit},sorttype) {
      switch (sorttype) {
        case "auth":
          sorttype = "auth";
          const authSorted = state.products.sort((a,b) => (a.author > b.author) ? 1 : ((b.author > a.author) ? -1 : 0))
          commit('setFilteredProducts', authSorted)
          break;
        case "inc":
          sorttype = "inc";
          const incSort = state.products.sort((a,b) => (a.dateAdded > b.dateAdded) ? 1 : ((b.dateAdded > a.dateAdded) ? -1 : 0))
          commit('setFilteredProducts', incSort)
          break;
        case "dec":
          sorttype = "dec";
          const decSort = state.products.sort((a,b) => (a.dateAdded < b.dateAdded) ? 1 : ((b.dateAdded < a.dateAdded) ? -1 : 0))
          commit('setFilteredProducts', decSort)
      }
    },
    filterLatestProducts({state, commit},value) {
      if(value){
        const latest = state.products.filter(product => new Date(product.dateAdded).getFullYear() === new Date().getFullYear())
        commit('setFilteredProducts', latest)
      } else {
        commit('setFilteredProducts', state.products)
      }
    },
    searchProducts({state,commit},value){
      const searchedProducts = state.products.filter(product => (product.title.toLowerCase().includes(value)) || product.author.toLowerCase().includes(value))
      commit('setFilteredProducts', searchedProducts)
    },
    resetSearch({state, commit}){
      commit('setFilteredProducts', state.products)
    }
  },
})
