<script setup>
import { RouterView } from 'vue-router'
import Header from './components/PageHeader.vue'
import NavBar from './components/NavBar.vue'


</script>

<template>
  <header>
    <div class="headCon">
      <NavBar />
      <Header />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
