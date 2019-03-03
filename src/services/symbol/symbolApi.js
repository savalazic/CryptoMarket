import api from '../api';

const symbolApi = {
  getSymbols: (userId, token) => api
    .get(`users/${userId}/symbols`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => ({ response }))
    .catch(error => ({ error })),
};

export default symbolApi;
