<script>
import { defineComponent } from 'vue'
export default defineComponent({
  mounted() {
    this.$store.dispatch('getInitialData')
  },
  computed: {
    layouts(){
      return this.$store.getters.getAllProducts
    },
    userLikes(){
      return this.$store.getters.getAllUserLikes
    }
  },
  methods: {
    onClickLike(clickedID) {
      const allLikes = this.$store.getters.getAllUserLikes
      if(allLikes.length <= 0 || !allLikes.includes(clickedID)) {
        this.$store.commit('addLike', clickedID)
      }else if(allLikes.includes(clickedID)){
        this.$store.commit('removeLike', clickedID)
      }else{
        this.$store.commit('setErrorState', {"status": "failed", "code": "", "text": "something went wrong. Can not like a product"})
      }
    },
  },
})
</script>
<script setup>
import Card from './Card.vue'
</script>
<template>
  <div class="container flex-container">
    <Card
      v-for="layout in layouts" 
      :key="layout.id"
      :id="layout.id"
      :title="layout.title"
      :author="layout.author"
      :dateAdded="layout.dateAdded"
      :images="layout.images"
      :likes="layout.likes"
      :userLike="userLikes.includes(layout.id)"
      @clickLike="onClickLike"
    />
  </div>  
</template>

<style lang="scss" scoped>
.container {
  margin-top: 6rem;
  @media screen and (min-width: 768px) {
    margin-top: 4rem;
  }
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
</style>