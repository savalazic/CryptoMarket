import api from '../api';

const symbolApi = {
  getSymbols: userId => api.get(`users/${userId}/symbols`),
};

export default symbolApi;
