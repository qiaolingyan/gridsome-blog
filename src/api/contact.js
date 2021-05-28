import request from '../utils/request'

export const contacts = data => {
  return request({
    method:'POST',
    url:'/contacts',
    data
  })
}
