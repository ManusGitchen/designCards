<script setup>
import Card from './Card.vue'
import layouts from '../api.json'
</script>
<template>
  <div class="container grid-container">
    <div v-for="layout in layouts.payload.data" :key="layout.id" :class="'item'+layout.id">
      <Card
        :title="layout.title"
        :author="layout.author"
        :dateAdded="layout.dateAdded"
        :images="layout.images"
        :likes="layout.likes"
      />

    </div>
  </div>  
</template>

<style lang="scss" scoped>
.container {
  margin-top: 4rem;
}
</style>