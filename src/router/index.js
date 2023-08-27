import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import SongView from '../views/SongView.vue'
// import PostFormView from '../views/PostFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/song/:id', // Dynamic route parameter :id,
      name: 'song',
      component: () => import('../views/SongView.vue'),
      props: true, // Pass props to the component
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('../views/PostView.vue'),
      props: true,
    },
    {
      path: '/post-form/:id',
      component: () => import('../views/PostFormView.vue'),
    },
    {
      path: '/login',
      component: () => import('../views/AuthView.vue'),
      props: false
    },
  ]
})

export default router
