/*
 * @Author:dingyuwen
 * @Date: 2022-08-10 15:22:35
 * @LastEditTime: 2022-08-17 23:51:22
 * @LastEditors: dingyuwen ding_yuwen@163.com
 * @Description: 系统级基本路由
 */
import config from '~/config'

export default [
  {
    name: 'layout',
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
    // redirect: config.DASHBOARD_URL || '/dashboard',
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
