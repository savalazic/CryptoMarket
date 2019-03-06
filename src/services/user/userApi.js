import api from '../api';

const getUserInfo = () => api
  .get('users/me')
  .then(response => ({ response }))
  .catch(error => ({ error }));

const getUserAccounts = userId => api
  .get(`users/${userId}/accounts`)
  .then(response => ({ response }))
  .catch(error => ({ error }));

export default {
  getUserInfo,
  getUserAccounts,
};
