import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TodoList from '../views/ToDo.vue'
import ContactView from '../views/ContactView.vue'

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
      path: '/contact',
      name: 'contact',
      component: ContactView,
      children: [
        {
          path: ':modal'
        }
      ]
    }
  ]
})

export default router
