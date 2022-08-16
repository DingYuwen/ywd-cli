/*
 * @Author:dingyuwen
 * @Date: 2022-08-10 15:22:35
 * @LastEditTime: 2022-08-10 16:44:47
 * @LastEditors:dingyuwen
 * @Description: 系统级基本路由
 */
import config from '~/config'

export default [
  {
    name: 'layout',
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
    redirect: config.DASHBOARD_URL || '/dashboard',
    children: [],
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
]
