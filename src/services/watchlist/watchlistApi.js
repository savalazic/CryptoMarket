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
  addToWatchlist: (accountId, symbolId, token, isFollowing) => api
    .put(
      `accounts/${accountId}/watchlist/${symbolId}`,
      {
        following: isFollowing,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    .then(response => ({ response }))
    .catch(error => ({ error })),
};

export default watchlist;
