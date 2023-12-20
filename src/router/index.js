import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

import TodoList from '../views/ToDo.vue'

import CharacterList from '../views/CharacterListView.vue'
import CharPage from '../views/CharView/CharPage.vue'

import NotFound from '../views/ErrorPages/NotFound.vue'
import NetworkError from '../views/ErrorPages/NetworkError.vue'
// import CharNotFound from '../views/ErrorPages/CharNotFound.vue'

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
      component: CharacterList,
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },

    {
      path: '/characters/:id',
      name: 'CharPage',
      props: true,
      component: CharPage
    },

    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },

    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },

    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true
    },

    {
      path: '/network-error',
      name: 'NetworkError',
      component: NetworkError
    }

    // {
    //   path: '/characters/:id:catchAll(.*)',
    //   name: 'CharNotFound',
    //   component: CharNotFound
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // <----
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
