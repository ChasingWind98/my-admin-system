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
