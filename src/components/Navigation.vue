<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      checked: false,
      options: [
        {type: 'auth', text: 'Alphabetical'}, 
        {type: 'inc', text: 'Date inc'},
        {type: 'dec', text: 'Date dec'}
      ],
      search: ''
    }
  },
  methods: {
    sortProducts(event) {
      this.$store.dispatch('sortProducts', event.target.value)
    },
    latestOnly(){
      this.$store.dispatch('filterLatestProducts', this.checked)
    },
    searchProducts(){
      this.search != ''
      ? this.$store.dispatch('searchProducts', this.search)
      : this.$store.dispatch('resetSearch')
      
    }
  }

})
</script>
<template>
  <div class="container">
    <div class="nav">
      <div class="search-container">
        <img src="../assets/search-icon.svg"/>
        <input
        class="form form--search"
        type="search"
        placeholder="filter by title, author..."
        v-model="search"
        @input="searchProducts"
        />
      </div>
      <select class="form form--control" @change="sortProducts($event)">
        <option value="" disabled selected>Select your option</option>
        <option 
        v-for="option in options" 
        :key="option.type"
        :value="option.type">
          {{option.text}}
        </option>
      </select>
      <div class="checkbox">
        <input 
        type="checkbox" 
        id="checkbox" 
        class="form form--checkbox"
        v-model="checked"
        @change="latestOnly()"
        />
        <label for="checkbox">Lastest only</label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: calc(100% - 2rem);
    transform: translateY(50%);
  }
  .search-container {
    display: flex;
    align-items: center;
    & img {
      margin-right: .5rem;
    }
  }
</style>
