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
        <h1>
            To Do List
        </h1>
        <todo-form />
        <todo-list />
      </div>
  </main>

</template>

<style scoped>

.todo-app {
  height: 50vh;
  padding: 1vh;
}

</style>