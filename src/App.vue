<script setup>
import Navigation from './components/Navigation.vue'
import ListOverview from './components/ListOverview.vue'
</script>

<template>
  <header>
    <div class="header-wrapper">
      <div class="container">
        <h1 class="page-title">dev articles</h1>
      </div>
    </div>
    <Navigation />
  </header>

  <main>
    <ListOverview />
  </main>
</template>

<style lang="scss" scoped>
header {
  height: 12rem;
  background: var(--background);
  color: var(--text-dark);
  position: relative;
  display: flex;
  & .header-wrapper {
    background: var(--primary);
    width: 100%;
    height: 100%;
    display: flex;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 95%);
  }
  & .page-title {
    font-size: 1.7rem;
  }
}

</style>
