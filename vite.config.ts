import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// 引入自动导入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 引入 path 模块处理路径
import path from 'path'
//引入 SVG图标插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// 引入 Mock 插件
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
//command 用于判断是 dev 还是 build，mode 用于加载环境变量
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      vue(),
      vueDevTools(),
      // 配置自动导入
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      // 2. 配置 SVG 插件
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹 (核心配置)
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定 symbolId 格式 (调用时的 ID 格式)
        // 这里的 [name] 会被自动替换为文件名
        symbolId: 'icon-[dir]-[name]',
      }),
      // 3. 配置 Mock 插件
      viteMockServe({
        // 指定 mock 文件存放的文件夹 (等下我们要创建这个文件夹)
        mockPath: 'mock',
        // 只有在开发环境 (serve) 下才开启 mock
        localEnabled: command === 'serve',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData 的内容会在每个 scss 文件的开头自动插入
          // @use "@/styles/variables.scss" as *; 表示引入变量并使得可以直接使用（无需前缀）
          additionalData: `@use "@/styles/variables.scss" as *;`,
        },
      },
    },
  }
})
