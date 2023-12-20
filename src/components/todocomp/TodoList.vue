<script setup>
import { useTodoListStore } from '/src/stores/todoList.js'
import { storeToRefs } from 'pinia'

const store = useTodoListStore()
const { todoList } = storeToRefs(store)
const { toggleCompleted, deleteTodo } = store
</script>

<template>
  <div class="todo-wrapper">
    <div v-for="todo in todoList" :key="todo.id" class="item">
      <div class="list">
        <span :class="{ completed: todo.completed }">
          {{ todo.item }}
        </span>
        <span @click.stop="toggleCompleted(todo.id)"> &#10004; </span>
        <span @click="deleteTodo(todo.id)" class="x"> &#10060; </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: right;
}

.list {
  display: flex;
  font-size: 1.5em;
  justify-content: right;
  padding: 0 10vw 0 0;
  color: var(--text-5);
}

.completed {
  text-decoration: line-through;
  color: var(--text-1);
}

.todo-app h1 {
  color: var(--text-3);
}
</style>
