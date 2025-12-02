import request from '@/utils/request'

// 1. URL 管理 (Java 中的常量)
enum API {
  LOGIN = '/user/login',
  USER_INFO = '/user/info',
}

//2. 定义使用到的DTO
// 建议：如果类型很简单，可以直接写在这里；
// 如果类型特别多，建议抽离到 src/api/model/userModel.ts 中
// 登录参数
export interface LoginParams {
  username: string
  password: string
  rememberMe?: boolean
}
// 登录结果
export interface LoginResult {
  token: string
  expiresIn: number
}
// 用户信息
export interface UserInfo {
  username: string
  roles: string[]
  avatar: string
}
//3. 接口函数导出
//登录接口
export const login = (params: LoginParams) => {
  return request.post<LoginResult>(API.LOGIN, params)
}

//获取用户信息接口
export const getUserInfo = () => {
  return request.get<UserInfo>(API.USER_INFO)
}
