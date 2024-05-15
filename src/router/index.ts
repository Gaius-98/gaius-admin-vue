import { createRouter, createWebHistory } from 'vue-router'
import {h}from 'vue'
import NotFound from '@/views/ErrorTemplate/NotFound.vue'
import BlankView from '@/layout/BlankView.vue'
import auth from '@/utils/auth'
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
          path:'/system',
          name:'system',
          component:BlankView,
          children:[        
            {
              path:'menu',
              name:'menu',
              component:()=>import('@/views/System/MenuView.vue')
            },
            {
              path:'user',
              name:'user',
              component:()=>import('@/views/System/UserView.vue')
            },
            {
              path:'dict',
              name:'dict',
              component:()=>import('@/views/System/DictView.vue')
            },
            {
              path:'role',
              name:'role',
              component:()=>import('@/views/System/RoleView.vue')
            },
            {
              path:'request',
              name:'request',
              component:()=>import('@/views/System/RequestView.vue')
            },
          ]
        },
        {
          path:'/low-code',
          name:'lowCode',
          component:BlankView,
          children:[
            {
              path:'form',
              name:'form',
              component:()=>import('@/views/LowCode/Form/FormView.vue'),
              props:(route)=>(route.query)
            },
            {
              path:'form-list',
              name:'formList',
              component:()=>import('@/views/LowCode/Form/FormList/FormList.vue')
            }
          ]
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
router.beforeEach((to,from,next)=>{
  if(to.path == '/login'){
    next()
  }else{
    if(auth.get()){
      next()
    }else{
      next('/login')
    }
  }
})
export default router
