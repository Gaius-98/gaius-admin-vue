import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import('@/layout/LayoutView.vue'),
      children:[
        {
          path:'/home',
          name:'home',
          component: () => import('@/views/Home/HomeView.vue'),
        },
        {
          path:'/menu',
          name:'menu',
          component:()=>import('@/views/System/MenuView.vue')
        }
      ]
    },
    
    {
      path:'/login',
      name:'login',
      component:()=>import('@/views/Login/LoginView.vue')
    }
  ]
})

export default router