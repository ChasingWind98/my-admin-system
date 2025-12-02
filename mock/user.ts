import { MockMethod } from 'vite-plugin-mock'
export default [
  // 模拟用户登录接口
  {
    url: '/api/user/login',
    method: 'post',
    //前端带过来的参数在 body 里 包含 username 和 password
    response: ({ body }) => {
      const { username, password } = body
      if (username === 'admin' && password === '123456') {
        return {
          code: 200,
          message: '登录成功',
          data: {
            token: 'mock-token-123456',
          },
        }
      } else {
        return {
          code: 401,
          message: '用户名或密码错误',
        }
      }
    },
  },

  // 模拟获取用户信息接口
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '获取用户信息成功',
        data: {
          username: 'admin',
          roles: ['admin'],
          avatar: 'https://i.pravatar.cc/150?img=3',
        },
      }
    },
  },
] as MockMethod[]
