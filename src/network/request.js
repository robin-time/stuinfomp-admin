import axios from 'axios'

export function request(config) {
  const axiosInstance = axios.create({
    // baseURL: 'http://jsonplaceholder.typicode.com/',
    baseURL: 'http://localhost:9000/api/',
    timeout: 50000,
    headers: ''
  })
  return axiosInstance(config)
}
