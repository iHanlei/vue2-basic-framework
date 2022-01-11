import request from '@/utils/request'

export function login(data = {}) {
  return request({
    url: '/xxx/xxx/xxx',
    method: 'POST',
    data
  })
}

export function getUserInfo(params = {}) {
  return request({
    url: '/xxx/xxx/xxx',
    method: 'GET',
    params
  })
}
