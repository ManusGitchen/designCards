<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      checked: false,
      options: [
        {type: 'auth', text: 'Alphabetical'}, 
        {type: 'inc', text: 'Date inc'},
        {type: 'dec', text: 'Date dec'}]
    }
  },
  methods: {
    sortProducts(event) {
      this.$store.dispatch('sortProducts', event.target.value)
    },
    latestOnly(){
      this.$store.dispatch('filterLatestProducts', this.checked)
    }
  }

})
</script>
<template>
  <div class="container">
    <div class="nav">
      filter by title, author...
      <select class="form-control" @change="sortProducts($event)">
        <option value="" disabled selected>Select your option</option>
        <option 
        v-for="option in options" 
        :key="option.type"
        :value="option.type">
          {{option.text}}
        </option>
      </select>
      <input 
      type="checkbox" 
      id="checkbox" 
      v-model="checked"
      @change="latestOnly()"
      />
      <label for="checkbox">Lastest only</label>

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
</style>
