import { createApp } from 'vue'
import '@tooy-ui/theme-chalk/src/index.scss'
import YElementPlus from '../../packages/index'
import App from './App.vue'


const app = createApp(App)
// 安装组件库
app.use(YElementPlus)
app.mount('#app')
