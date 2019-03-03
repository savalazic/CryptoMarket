import api from '../api';

const getSymbols = (userId, token) => api
  .get(`users/${userId}/symbols`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(response => ({ response }))
  .catch(error => ({ error }));

const getSymbol = (userId, symbolId, token) => api
  .get(`users/${userId}/symbols/${symbolId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(response => ({ response }))
  .catch(error => ({ error }));

const getWatchlist = (accountId, token) => api
  .get(`accounts/${accountId}/watchlist`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(response => ({ response }))
  .catch(error => ({ error }));

const addToWatchlist = (accountId, symbolId, token, isFollowing) => api
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
  .catch(error => ({ error }));

export default {
  getSymbols,
  getSymbol,
  getWatchlist,
  addToWatchlist,
};
