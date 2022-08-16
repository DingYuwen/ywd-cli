import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { Router } from './router';
import { createPinia } from 'pinia'

// Vant 桌面端适配
import '@vant/touch-emulator'


const app = createApp(App);

app.use(createPinia()).use(Router);

app.mount('#app');
