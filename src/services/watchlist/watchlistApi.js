import api from '../api';

const watchlist = {
  getWatchlist: (accountId, token) => api
    .get(`accounts/${accountId}/watchlist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => ({ response }))
    .catch(error => ({ error })),
};

export default watchlist;
