import ClientCreate from './../components/ClientCreate.vue'
import ClientList from './../components/ClientList.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from './../views/AboutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ClientList',
      component: ClientList,
    },
    {
      path: '/create',
      name: 'ClientCreate',
      component: ClientCreate,
    },
    {
      path: '/about',
      name: 'Sobre',
      component: AboutView,
    },
  ],
})

export default router
