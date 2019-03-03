import axios from 'axios';
import { API_ROOT } from '../config';

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

const api = {
  get: (resourceUrl, options = {}, resourceId, params = {}) => {
    const id = resourceId ? `/${resourceId}` : '';
    const url = `${API_ROOT}/${resourceUrl + id + createQueryString(params)}`;

    return axios.get(url, options);
  },
  post: (resourceUrl, newResource, options = {}) => {
    const url = `${API_ROOT}/${resourceUrl}`;
    return axios.post(url, newResource, options);
  },
  remove: (resourceUrl, resourceId) => {
    const url = `${API_ROOT}/${resourceUrl}/${resourceId || ''}`;
    return axios.delete(url);
  },
};

export default api;
