<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/PageHeader.vue'
</script>

<template>
  <header>
    <div class="page-container">
      <Header />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/todolist">To Do List</RouterLink>
        <RouterLink to="/characterlist">Character List</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
