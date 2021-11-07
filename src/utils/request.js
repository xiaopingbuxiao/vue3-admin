import axios from 'axios'
import config from '../config'

const instance = axios.create({
  timeout: 1000 * 5,
  baseURL: config.baseUrl,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

/* 请求拦截器 */
instance.interceptors.request.use((config) => {
  return config
})

/* 相应拦截器 */
instance.interceptors.response.use(response => {
  return response
})

export default instance
