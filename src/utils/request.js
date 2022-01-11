/**
 * axios请求方法封装
 */

import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/storage'

// axios基础配置
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 请求地址
  withCredentials: true, // 携带cookie信息
  timeout: 30000 // 请求时间
})

// axios请求拦截 & header增加token
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// axios响应拦截统一处理返回结果
service.interceptors.response.use(
  response => {
    const res = response.data
    // 正确返回结果
    if (res.code == 200) {
      return res.data
    } else if (res.code == 401) {
      // 401处理
      return Promise.reject('401')
    } else {
      //其它处理
      return Promise.reject(new Error(res.msg || 'Network Error'))
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
