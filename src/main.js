import { createApp, } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css'
import './assets/style/app.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './icons/index' // 引入 svg 图片
import components from './components/index' // 引入全局组件

const app = createApp(App)
app.use(store)
  .use(components)
  .use(router)
  .use(ElementPlus, { size: 'medium', }) // large' | 'medium' | 'small' | 'mini';
  .mount('#app')
