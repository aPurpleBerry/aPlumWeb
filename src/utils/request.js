import axios from 'axios'
console.log(import.meta.env.VITE_BASE_API)

const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

request.interceptors.response.use((response) => {
  return response.data.data
})

export default request
