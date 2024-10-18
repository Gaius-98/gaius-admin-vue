import { createRouter, createWebHistory } from 'vue-router'
import auth from '@/utils/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layout/LayoutView.vue'),
      redirect: {
        path: '/home'
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/Home/HomeView.vue')
        },
        {
          path: '/system',
          name: 'system',
          component: () => import('@/layout/BlankView.vue'),
          children: [
            {
              path: 'menu',
              name: 'menu',
              component: () => import('@/views/System/MenuView.vue')
            },
            {
              path: 'user',
              name: 'user',
              component: () => import('@/views/System/UserView.vue')
            },
            {
              path: 'org',
              name: 'org',
              component: () => import('@/views/System/OrgView.vue')
            },
            {
              path: 'dict',
              name: 'dict',
              component: () => import('@/views/System/DictView.vue')
            },
            {
              path: 'role',
              name: 'role',
              component: () => import('@/views/System/RoleView.vue')
            },
            {
              path: 'request',
              name: 'request',
              component: () => import('@/views/System/RequestView.vue')
            },
            {
              path: 'resource',
              name: 'resource',
              component: () => import('@/views/System/ResourceView.vue')
            },{
              path:'setting',
              name:'setting',
              component: () => import('@/views/System/SettingView.vue')
            }
          ]
        },
        {
          path: '/low-code',
          name: 'lowCode',
          component: () => import('@/layout/BlankView.vue'),
          children: [
            {
              path: 'form',
              name: 'form',
              component: () => import('@/views/LowCode/Form/FormEditor/FormEditor.vue'),
              props: (route) => route.query
            },
            {
              path: 'form-list',
              name: 'formList',
              component: () => import('@/views/LowCode/Form/FormList/FormList.vue')
            },
            {
              path: 'table',
              name: 'table',
              component: () => import('@/views/LowCode/Table/TableEditor/TableEditor.vue'),
              props: (route) => route.query
            },
            {
              path: 'table-list',
              name: 'tableList',
              component: () => import('@/views/LowCode/Table/TableList/TableList.vue')
            },
            
            {
              path: 'visual-list',
              name: 'visualList',
              component: () => import('@/views/LowCode/Visual/VisualList/VisualList.vue')
            },
            {
              path: 'visual',
              name: 'visual',
              component: () => import('@/views/LowCode/Visual/VisualEditor/VisualEditor.vue')
            }
          ]
        },
        {
          path: '/apply',
          name: 'apply',
          children: [
            {
              path: 'form',
              name: 'apply-form',
              component: () => import('@/components/LowCodeForm/LowCodeFormId.vue'),
              props: (route) => route.query
            },
            {
              path: 'table',
              name: 'apply-table',
              component: () => import('@/components/LowCodeTable/LowCodeTable.vue'),
              props: (route) => route.query
            },
            {
              path: 'iframe',
              name: 'iframe',
              component: () => import('@/components/IframeView.vue'),
              props: (route) => route.query
            }
          ]
        },
        {
          path: '/:pathMatch(.*)*',
          name: '404',
          component: () => import('@/views/ErrorTemplate/NotFound.vue')
        }
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/LoginView.vue')
    },
    {
      path: '/preview-table',
      name: 'previewLowCodeTable',
      component: () => import('@/views/LowCode/Table/PreviewTable/PreviewTable.vue'),
      props: (route) => route.query
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next()
  } else {
    if (auth.get()) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
