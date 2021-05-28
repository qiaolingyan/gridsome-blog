import axios from 'axios'
import Cookies from 'js-cookie'

const request = axios.create({
  baseURL:'https://106.75.182.115:1337'
})

request.interceptors.request.use(config => {
  // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIyMTY2MDgyLCJleHAiOjE2MjQ3NTgwODJ9.FM-a1-eg2shl9fd0tcIotYJyjM2rUiOzykgi7NDf6FA'
  let token = Cookies.get('token') || ''
  
  config.data = JSON.stringify(config.data)
  config.headers = {
    'Content-Type':'application/json',
    Authorization: `Bearer ${token}`,
  }
  return config
},err => {
  return Promise.reject(err)
})

request.interceptors.response.use(response => {
  return response
},err => {
  return Promise.reject(err)
})




export default request
