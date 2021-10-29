import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/Layout/index'

const constantRouter = [{
  path: '/',
  name: 'Home',
  component: Layout,
  redirect: '/home',
  children: [
    {
      path: 'about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      meta: {
        title: 'about页面',
        roles: ['admin']
      }
    },
    {
      path: 'home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
      meta: {
        title: 'about页面',
        roles: ['role1']
      }
    }
  ]
},
{
  path: '/exception:(.*)*',
  component: Layout,
  children: [
    {
      path: '/:exception*',
      name: 'Exception',
      component: () => import(/* webpackChunkName: "Exception" */ '../views/exception/index.vue'),
      meta: {
        title: '错误页面'
      }
    }
  ]
}
]

/* 根据用户权限生成路由 */

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouter
})

router.beforeEach((to, from, next) => {
  const { title } = to.meta
  document.title = title || '后台管理系统'
  next()
})

export default router
