import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: window.CONFIG.API_BASEURL, // api 的 base_url
  timeout: 0 // 请求超时时间
})


export default service