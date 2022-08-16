import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    meta: { title: 'Home' },
    component: Home,
  },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
  },
  {
    path: '/:page',
    component: NotFound,
  },
];

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});
