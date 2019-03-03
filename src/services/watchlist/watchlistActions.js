export const ActionTypes = {
  GET_WATCHLIST_REQUEST: 'GET_WATCHLIST_REQUEST',
  GET_WATCHLIST_SUCCESS: 'GET_WATCHLIST_SUCCESS',
  GET_WATCHLIST_FAILURE: 'GET_WATCHLIST_FAILURE',
};

export const getWatchlist = userId => ({
  type: ActionTypes.GET_WATCHLIST_REQUEST,
  payload: userId,
});

export const getWatchlistSuccess = watchlist => ({
  type: ActionTypes.GET_WATCHLIST_SUCCESS,
  payload: watchlist,
});

export const getWatchlistFailure = error => ({
  type: ActionTypes.GET_WATCHLIST_FAILURE,
  payload: error,
});
