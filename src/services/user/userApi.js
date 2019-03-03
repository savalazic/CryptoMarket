import api from '../api';

const userApi = {
  getUser: token => api
    .get('users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => ({ response }))
    .catch(error => ({ error })),
};

export default userApi;
