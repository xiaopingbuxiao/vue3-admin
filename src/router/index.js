import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/Layout/index'

const constantRouter = [{
  path: '/',
  name: 'Home',
  component: Layout,
  children: [
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      meta: {
        title: 'about页面'
      }
    }
  ]
}]

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
