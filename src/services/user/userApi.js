import api from '../api';

const getUserInfo = token => api
  .get('users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(response => ({ response }))
  .catch(error => ({ error }));

export default {
  getUserInfo,
};
