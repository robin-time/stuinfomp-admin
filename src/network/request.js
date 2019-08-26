import axios from 'axios'

export function request(config) {
  const axiosInstance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/',
    timeout: 5000
  })
  return axiosInstance(config)
}
