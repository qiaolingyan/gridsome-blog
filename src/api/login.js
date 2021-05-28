import request from '../utils/request'

export const login = data => {
  return request({
    method:'POST',
    url:'/admin/login',
    data
  })
}
