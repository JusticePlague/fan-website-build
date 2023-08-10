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
        <span @click.stop="toggleCompleted(todo.id)">
          &#10004;
        </span>
        <span @click="deleteTodo(todo.id)" class="x">
          &#10060;
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>