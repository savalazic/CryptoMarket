export const ActionTypes = {
  GET_WATCHLIST_REQUEST: 'GET_WATCHLIST_REQUEST',
  GET_WATCHLIST_SUCCESS: 'GET_WATCHLIST_SUCCESS',
  GET_WATCHLIST_FAILURE: 'GET_WATCHLIST_FAILURE',
  ADD_TO_WATCHLIST_REQUEST: 'ADD_TO_WATCHLIST_REQUEST',
  ADD_TO_WATCHLIST_SUCCESS: 'ADD_TO_WATCHLIST_SUCCESS',
  ADD_TO_WATCHLIST_FAILURE: 'ADD_TO_WATCHLIST_FAILURE',
};

export const getWatchlist = accountId => ({
  type: ActionTypes.GET_WATCHLIST_REQUEST,
  payload: accountId,
});

export const getWatchlistSuccess = watchlist => ({
  type: ActionTypes.GET_WATCHLIST_SUCCESS,
  payload: watchlist,
});

export const getWatchlistFailure = error => ({
  type: ActionTypes.GET_WATCHLIST_FAILURE,
  payload: error,
});

export const addToWatchlist = (accountId, symbolId) => ({
  type: ActionTypes.ADD_TO_WATCHLIST_REQUEST,
  payload: { accountId, symbolId },
});

export const addToWatchlistSuccess = watchlist => ({
  type: ActionTypes.ADD_TO_WATCHLIST_SUCCESS,
  payload: watchlist,
});

export const addToWatchlistFailure = error => ({
  type: ActionTypes.ADD_TO_WATCHLIST_FAILURE,
  payload: error,
});
