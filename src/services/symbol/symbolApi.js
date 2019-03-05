import api from '../api';

const getSymbols = userId => api
  .get(`users/${userId}/symbols`)
  .then(response => ({ response }))
  .catch(error => ({ error }));

const getSymbol = (userId, symbolId) => api
  .get(`users/${userId}/symbols/${symbolId}`)
  .then(response => ({ response }))
  .catch(error => ({ error }));

const getWatchlist = accountId => api
  .get(`accounts/${accountId}/watchlist`)
  .then(response => ({ response }))
  .catch(error => ({ error }));

const addToWatchlist = (accountId, symbolId, isFollowing) => api
  .put(`accounts/${accountId}/watchlist/${symbolId}`, {
    following: isFollowing,
  })
  .then(response => ({ response }))
  .catch(error => ({ error }));

const getChartData = (userId, symbolId) => api
  .get(`users/${userId}/symbols/${symbolId}/charts`)
  .then(response => ({ response }))
  .catch(error => ({ error }));

export default {
  getSymbols,
  getSymbol,
  getWatchlist,
  addToWatchlist,
  getChartData,
};
