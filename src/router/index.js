import { createRouter, createWebHashHistory, } from 'vue-router'

import Layout from '@/Layout/index'

const Login = () => import(/* webpackChunkName: "login页面" */'../views/login/index.vue')

const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const Home = () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')

const Exception = () => import(/* webpackChunkName: "Exception" */ '../views/exception/index.vue')

export const asyncRouter = [{
  path: '/',
  name: 'Home',
  component: Layout,
  redirect: '/home',
  hidden: true,
  children: [
    {
      path: 'about',
      name: 'About',
      component: About,
      meta: {
        title: 'About页面',
        roles: ['admin'],
      },
    },
    {
      path: 'home',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home页面',
        roles: ['role1'],
      },
    }
  ],
},
{
  path: '/exception',
  name: 'exception',
  component: Layout,
  children: [
    {
      path: '404',
      name: '404',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      meta: {
        title: '404',
        roles: ['admin'],
      },
    },
    {
      path: '403',
      name: '403',
      component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
      meta: {
        title: '403',
        roles: ['role1'],
      },
    },
    {
      path: '500',
      name: '500',
      component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
      meta: {
        title: '500',
        roles: ['role1'],
      },
    }
  ],
},
{
  path: '/exception:(.*)*',
  component: Layout,
  children: [
    {
      path: '/:exception*',
      name: 'Exception',
      component: Exception,
      meta: {
        title: '错误页面',
        roles: ['admin'],
      },
    }
  ],
}
]

const constantRouter = [
  { path: '/login', name: 'LOGIN', component: Login, meta: { title: '登录页面', }, }
]

/* 根据用户权限生成路由 */

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouter,
})

router.beforeEach((to, from, next) => {
  const { title, } = to.meta
  document.title = title || '后台管理系统'
  next()
})

export default router
