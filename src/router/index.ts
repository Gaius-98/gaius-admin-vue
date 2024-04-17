import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/ErrorTemplate/NotFound.vue'
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
        },
        {
          path:'/user',
          name:'user',
          component:()=>import('@/views/System/UserView.vue')
        },
        {
          path:'/dict',
          name:'dict',
          component:()=>import('@/views/System/DictView.vue')
        },
        {
          path:'/role',
          name:'role',
          component:()=>import('@/views/System/RoleView.vue')
        },
        {
          path:'/:pathMatch(.*)*',
          name:'404',
          component:NotFound
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
