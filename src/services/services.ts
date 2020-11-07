import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

export const api = {
  get(endpoint: string) {
    return axiosService.get(endpoint);
  },
  post(endpoint: string, body: any) {
    return axiosService.post(endpoint, body);
  },
  delete(endpoint: string) {
    return axiosService.delete(endpoint);
  },
  put(endpoint: string) {
    return axiosService.put(endpoint);
  },
};
