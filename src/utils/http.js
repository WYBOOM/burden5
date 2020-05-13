import axios from 'axios'
import { Message, Loading, MessageBox } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: window.CONFIG.API_BASEURL, // api 的 base_url
  timeout: 0 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    let token = window.localStorage.getItem('token')
    if (config.url == '/wp-json/jwt-auth/v1/token'){
        return config
    }else
    if (token) {
      //根据token判断是否有登录过，如果没有，则跳转只登录页面（排除登录接口）
      config.headers = {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    } else {
      MessageBox.alert('登录失效，请重新登录', {
        confirmButtonText: '确定',
        callback: action => {
          window.location.href = '/'
        }
      })
    }

    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response
    return res
  },
  error => {
    console.log('err' + error) // for debug
    if (
      error.response.data.code &&
      error.response.data.code == 'jwt_auth_invalid_token'
    ) {
      MessageBox.alert('登录失效，请重新登录', {
        confirmButtonText: '确定',
        callback: action => {
          window.location.href = '/'
        }
      })
    }
    return error.response
  }
)
export default service
