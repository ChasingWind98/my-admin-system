import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  // 这里的 import.meta.env.VITE_API_BASE_URL 对应你 .env 文件里的配置
  // 如果你还没配，暂时写 '/api' 也可以
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 5000,
})

// 请求拦截器 (Java Filter)
service.interceptors.request.use(
  // 请求发送前的处理逻辑 接收config并在后面返回
  (config) => {
    // 模拟添加 Token
    // const token = localStorage.getItem('token')
    // if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error),
)

// 响应拦截器
service.interceptors.response.use(
  //成功的回调
  (response) => {
    //提取数据 在后面返回
    const res = response.data
    // 假设后端约定的成功 code 是 200
    if (res.code !== 200) {
      // 这里可以处理报错，比如弹窗提示
      console.error('接口报错:', res.message)
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
  },
  // 失败的回调
  (error) => {
    console.error('网络错误:', error)
    return Promise.reject(error)
  },
)
//对外暴露
export default service
