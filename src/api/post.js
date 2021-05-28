import request from '../utils/request'

export const post = data => {
  return request({
    method:'POST',
    url:'/posts',
    data
  })
}

export const updatePost = ({ data,id }) => {
  return request({
    method:'PUT',
    url:`/posts/${id}`,
    data
  })
}
