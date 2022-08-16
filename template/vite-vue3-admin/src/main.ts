/*
 * @Author:dingyuwen
 * @Date: 2022-08-10 13:23:21
 * @LastEditTime: 2022-08-11 14:27:18
 * @LastEditors:dingyuwen
 * @Description:
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '~/assets/styles/index.scss'

const app = createApp(App)

app.use(createPinia()).use(router)

app.mount('#app')
