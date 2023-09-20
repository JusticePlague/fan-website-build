<script setup>
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
</script>

<template>
  <div class="banners">
    <h1 class="colorBar">SO LONG AND GOODNIGHTTTTT</h1>
  </div>
  <main>
    <div class="todo-app">
      <h1>To Do List</h1>
      <todo-form />
      <todo-list />
    </div>
  </main>
</template>

<style scoped>
.todo-app {
  padding: 5vh;
  min-width: 10vw;
}

@media (min-width: 1024px) {

  .todo-app {
    padding: 0vh;
    min-width: 50vw;
  }
}
</style>
