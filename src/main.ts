import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import { zhCn } from 'element-plus/es/locales.mjs'

//引入 svg 图标注册脚本
import 'virtual:svg-icons-register'

//引入全局样式入口
import '@/styles/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 引入elemnt-plus
app.use(ElementPlus, {
  size: 'default', // 设置组件默认大小
  zIndex: 3000, // 设置组件默认 z-index
  locale: zhCn, // 如果你需要支持多语言，可以在这里设置
})

app.mount('#app')
