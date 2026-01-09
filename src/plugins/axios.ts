import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
// import { getAppEnvConfig } from '@/utils/env';
// import { showLoading, hideLoading } from './fullLoading';
import { getQueryObject } from '@/utils/common';
import Toast from '@/components/Toast';

// const { VITE_BASE_API } = getAppEnvConfig();
const { token, appkey, channel_code } = getQueryObject();

/**
 * axios
 */
const timeout = 2 * 60 * 1000;
export const baseApi = axios.create({
  // baseURL: VITE_BASE_API,
  timeout,
  withCredentials: false,
});
const baseParams = {
  appkey,
  channel_code,
};

const axiosInter = (axiosType: AxiosInstance) => {
  axiosType.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      config.headers = {
        ...config.headers,
        'X-Token': `Bearer ${token}`,
      };
      config.data = {
        ...config.data,
        ...baseParams,
      };
      // 请求拦截
      // if (config.headers && config.headers.noLoading == 'true') {
      //   hideLoading();
      // } else {
      //   showLoading();
      // }

      // if (config.headers) {
      //   config.headers['X-Token'] = `Bearer ${token}`;
      // } else {
      //   config.headers = { 'X-Token': `Bearer ${token}` };
      // }

      if (config.method === 'post') {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      }
      return config;
    },
    (error) => {
      // 请求错误处理
      // hideLoading();
      return Promise.reject(error);
    },
  );

  axiosType.interceptors.response.use(
    (response) => {
      // 响应拦截
      // hideLoading();
      if (response.data.code === 200) {
        return response.data;
      } else {
        console.log(response.data.msg);
        Toast({ title: response.data.msg });
        return response.data;
      }
    },
    (error) => {
      // 对响应错误做点什么
      // hideLoading();
      if (error.response) {
        if (error.response.status === 401) {
          // store.dispatch('signOut');
          goLogin();
        } else {
          const { data } = error.response;
          const { message } = data;
          if (message) {
            // Toast(message);
          }
          return Promise.reject(error);
        }
      }
    },
  );
};

axiosInter(baseApi);

function goLogin() {
  // jumpClient('login');
}

export default {
  baseApi,
};
