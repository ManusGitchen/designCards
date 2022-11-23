import axios from 'axios'
import { createStore } from 'vuex'

// IMPROVEMENT: If there are more details, it would make sense to split the store in namespaced modules
export default createStore({
  state: {
    errorMessage: {},
    products: [],
    filteredProducts: [],
    usersLikes: []
  },
  getters: {
    /**
     * Getter for all stored and filtered products 
     * Use always filtered products even if they are filtered or not
     * @param {*} state 
     * @returns the filtered products to the component
     */
    getAllProducts:(state) => {
      return state.filteredProducts
    },

    /**
     * Getter for stored error message
     * @param {*} state 
     * @returns error messages
     */
    getErrorMessage:(state) => {
      return state.errorMessage
    },

    /**
     * Getter for all liked products
     * @param {*} state 
     * @returns liked users
     */
    getAllUserLikes:(state) => {
      return state.usersLikes
    }
  },
  mutations: {
    /**
     * Stores the fetched product data in state
     * used for fallback and resetting filters without new fetch
     * @param {*} state 
     * @param {*} productData fetched product data from api
     */
    setProducts(state, productData) {
     state.products = productData
    },

    /**
     * Stores the filtered product data in state.
     * On first load, filtered products are all products from api
     * @param {*} state 
     * @param {*} productData filtered products (on init fetched data from api)
     */
    setFilteredProducts(state, productData) {
      state.filteredProducts = productData
     },
     
    /**
     * Stores messages even if they includes error of success
     * @param {*} state 
     * @param {*} errorMsg fetched error messages from api
     */
    setErrorState(state, errorMsg){
      state.errorMessage = errorMsg
    },

    /**
     * Add the liked product to state, when the user clicked the like button on card
     * @param {*} state 
     * @param {*} clickedID id of liked product
     */
    addLike(state, clickedID) {
      state.usersLikes.push(clickedID)
      const product = state.products.find(product => product.id === clickedID)
      product.likes += 1
    },

    /**
     * Removed the liked product from state, when the user clicked the active liked button again
     * @param {*} state 
     * @param {*} clickedID id of disliked product
     */
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
     * Fetch data from api
     * For CORS issues in dev mode, used the Local CORS Proxy (https://github.com/garmeeh/local-cors-proxy)
     * by running npm run proxy local
     * For running without proxy, change the URL to 'https://myposter.de/web-api/job-interview' and block CORS Issues
     * @param {*} param0 
     */
    getInitialData({commit}) {
      axios.get('http://127.0.0.1:8010/proxy')
      .then(response =>{
        let res = response.data
        commit('setProducts', res.payload.data),
        commit('setFilteredProducts', res.payload.data)
      })
    },

    /**
     * Sorts products depending on given sorttype
     * @param {*} param0 
     * @param {*} sorttype sorts by author name, date increment and date decrement
     */
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

    /**
     * If value (of checkbox) is true, filters for products with date of the current year
     * otherwise resets the filtered products to the initial products
     * @param {*} param0 
     * @param {*} value true / false
     */
    filterLatestProducts({state, commit},value) {
      if(value){
        const latest = state.products.filter(product => new Date(product.dateAdded).getFullYear() === new Date().getFullYear())
        commit('setFilteredProducts', latest)
      } else {
        commit('setFilteredProducts', state.products)
      }
    },

    /**
     * Search for products that includes the search input in title or author name.
     * IMPROVEMENT: It's a simple String search and could be improved by a fuzzy search implementation
     * @param {*} param0 
     * @param {*} value search field input
     */
    searchProducts({state,commit},value){
      const searchedProducts = state.products.filter(product => (product.title.toLowerCase().includes(value)) || product.author.toLowerCase().includes(value))
      commit('setFilteredProducts', searchedProducts)
    },

    /**
     * If the search input is empty (from clicking on x or deleting the input)
     * reset the filtered products with the initial fetched products
     * @param {*} param0 
     */
    resetSearch({state, commit}){
      commit('setFilteredProducts', state.products)
    }
  },
})
