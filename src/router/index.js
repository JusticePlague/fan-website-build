import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TodoList from '../views/ToDo.vue'
import ContactView from '../views/ContactView.vue'
import CharacterList from '../views/CharacterListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/about',
      name: 'about',
      component: AboutView
    },

    {
      path: '/todolist',
      name: 'todoList',
      component: TodoList
    },

    {
      path: '/characterlist',
      name: 'character-list',
      component: CharacterList
    },
    

    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
