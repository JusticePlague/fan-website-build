import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

import TodoList from '../views/ToDo.vue'

import CharacterList from '../views/CharacterListView.vue'
import CharPage from '../components/charcomp/CharPage.vue'

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
      name: 'CharacterList',
      component: CharacterList
    },

    {
      path: '/characters/:id',
      name: 'CharPage',
      component: CharPage
    },

    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
