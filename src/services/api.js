import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { API_ROOT } from '../config';

import { store } from '../index';
import { logout } from './auth/authActions';

export const createQueryString = (params) => {
  const paramsKeys = Object.entries(params)
    .filter(param => param[1] !== undefined)
    .map(param => param[0]);
  let queryString = '';
  paramsKeys.forEach((key, index) => {
    queryString += index === 0 ? '?' : '&';
    if (Array.isArray(params[key])) {
      params[key].forEach((el, i) => {
        if (i > 0) {
          queryString += '&';
        }
        queryString += `${encodeURIComponent(`${key}`)}=${encodeURIComponent(
          el,
        )}`;
      });
    } else {
      queryString += `${encodeURIComponent(key)}=${encodeURIComponent(
        params[key],
      )}`;
    }
  });
  return queryString;
};

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.headers.noAuth) {
      return config;
    }

    const request = config;

    const accessToken = await AsyncStorage.getItem('accessToken');
    if (accessToken) {
      request.headers.common.Authorization = `Bearer ${accessToken}`;
    }

    return request;
  },
  err => Promise.reject(err),
);

axiosInstance.interceptors.response.use(
  response => response,
  (error) => {
    const { status } = error.response;
    if (status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  },
);

const get = (resourceUrl, params = {}, resourceId, options = {}) => {
  const id = resourceId ? `/${resourceId}` : '';
  const url = `${API_ROOT}/${resourceUrl + id + createQueryString(params)}`;

  return axiosInstance.get(url, options);
};

const post = (resourceUrl, newResource, options = {}) => {
  const url = `${API_ROOT}/${resourceUrl}`;
  return axiosInstance.post(url, newResource, options);
};

const put = (resourceUrl, newResource, options = {}) => {
  const url = `${API_ROOT}/${resourceUrl}`;
  return axiosInstance.put(url, newResource, options);
};

const remove = (resourceUrl, resourceId) => {
  const url = `${API_ROOT}/${resourceUrl}/${resourceId || ''}`;
  return axiosInstance.delete(url);
};

export default {
  get,
  post,
  put,
  remove,
};
