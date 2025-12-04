/// <reference types="vite/client" />
// 定义环境变量的类型接口
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_USE_MOCK: boolean
  // 更多变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

//定义路由元信息
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string // 菜单标题
    icon?: string // 菜单图标 (SvgIcon name 或 Element Icon)
    hidden?: boolean // 是否在侧边栏隐藏 (比如详情页通常隐藏)
    roles?: string[] // 权限角色 ['admin', 'editor']
    keepAlive?: boolean // 是否缓存组件
  }
}
