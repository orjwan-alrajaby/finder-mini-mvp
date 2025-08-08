import axios, {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import { API_BASE_URL } from '@/constants/env';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
  meta?: {
    startTime?: number;
  };
}

console.log('API_BASE_URL', API_BASE_URL);

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config: CustomAxiosRequestConfig) => {
    config.meta = config.meta || {};
    config.meta.startTime = Date.now();

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const config = response.config as CustomAxiosRequestConfig;
    const duration = Date.now() - (config.meta?.startTime || 0);
    console.info(`[${response.status}] ${response.config.url} - ${duration}ms`);
    return response;
  },
  async (error: AxiosError) => {
    const config = error.config as CustomAxiosRequestConfig;

    if (error.response) {
      const { status, data } = error.response;
      console.error(`[ERROR ${status}] ${config.url}`, data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Axios setup error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
