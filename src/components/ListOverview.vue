<script>
import { defineComponent } from 'vue'
export default defineComponent({
  mounted() {
    this.$store.dispatch('getInitialData')
  },
  computed: {
    layouts(){
      return this.$store.getters.getAllProducts
    }
  }
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
      :title="layout.title"
      :author="layout.author"
      :dateAdded="layout.dateAdded"
      :images="layout.images"
      :likes="layout.likes"
    />
  </div>  
</template>

<style lang="scss" scoped>
.container {
  margin-top: 4rem;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
</style>