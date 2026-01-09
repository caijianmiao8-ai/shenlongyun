import axios from '@/plugins/axios';

const _axios = axios.baseApi;

export const commonMethodGET = (url: string, params?: any) => _axios.get(url, { params });

export const commonMethodPOST = (url: string, data?: any) => {
  return _axios.post(url, data);
};
export const commonMethodPUT = (url: string, data?: any) => {
  return _axios.put(url, data);
};

export const commonMethodDELETE = (url: string, data?: any) => {
  return _axios.delete(url, data);
};
