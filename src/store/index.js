// import axios from 'axios' //for http request preparation
import apiRes from '../api.json'
import { createStore } from 'vuex'

export default createStore({
  state: {
    errorMessage: {},
    // If there are more details, it would make sense to split the store in namespaced modules
    products: [],
    usersLikes: []
  },
  getters: {
    getAllProducts:(state) => {
      return state.products
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
    }
  },
  actions: {
    /**
     * I mock the api response with an import of api.json,
     * but the following includes the preparation for a real api call (commented part)
     * @param {*} param0 
     */
    getInitialData({commit,dispatch}) {
      const res = apiRes
      if(res.message.status === 'success') {
        commit('setProducts', res.payload.data)
        commit('setErrorState', res.message)
      }
      else {
        dispatch('apiErrorHandling', res.message)
      }

      ///////////////////// --- HTTP Request Preparation --- /////////////////////
      // axios ({
      //   url:'https://www.myposter.de/apicall',
      //   method:'post',
      //   data: {
      //     query:`some query if needed`
      //   }
      // }).then(res =>{
      //   if(res.message.status === 'success') {
      //   commit('setProducts', res.payload.data)
      //   commit('setErrorState', res.message)
      //   }
      //   else {
      //     dispatch('apiErrorHandling', res.message)
      //   }
      // })
    },
    /**
     * 
     * @param {*} product the liked product id
     */
    likeCount({state, commit},likedProduct){
      console.log(likedProduct)
      state.products.findIndex(product => product.id === likedProduct.id)
    }
  },
})
