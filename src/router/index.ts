import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

//定义常量路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    //登录路由
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
  },
  // 404 页面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error/404.vue'),
    meta: { hidden: true },
  },
]

const router = createRouter({
  //暂时用hash模式 路径中会有# 这样只需要纯前端就能实现页面的跳转
  history: createWebHashHistory(import.meta.env.BASE_URL),
  //后续可能需要组装Module路由,...将constantRoutes中的内容展开,放到routes中
  routes: [...constantRoutes],
  // 切换页面时滚动条复位
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
