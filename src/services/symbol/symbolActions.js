export const ActionTypes = {
  GET_SYMBOLS_REQUEST: 'GET_SYMBOLS_REQUEST',
  GET_SYMBOLS_SUCCESS: 'GET_SYMBOLS_SUCCESS',
  GET_SYMBOLS_FAILURE: 'GET_SYMBOLS_FAILURE',
  GET_SYMBOL_REQUEST: 'GET_SYMBOL_REQUEST',
  GET_SYMBOL_SUCCESS: 'GET_SYMBOL_SUCCESS',
  GET_SYMBOL_FAILURE: 'GET_SYMBOL_FAILURE',
  GET_WATCHLIST_REQUEST: 'GET_WATCHLIST_REQUEST',
  GET_WATCHLIST_SUCCESS: 'GET_WATCHLIST_SUCCESS',
  GET_WATCHLIST_FAILURE: 'GET_WATCHLIST_FAILURE',
  ADD_TO_WATCHLIST_REQUEST: 'ADD_TO_WATCHLIST_REQUEST',
  ADD_TO_WATCHLIST_SUCCESS: 'ADD_TO_WATCHLIST_SUCCESS',
  ADD_TO_WATCHLIST_FAILURE: 'ADD_TO_WATCHLIST_FAILURE',
  GET_SYMBOL_CHART_DATA_REQUEST: 'GET_SYMBOL_CHART_DATA_REQUEST',
  GET_SYMBOL_CHART_DATA_SUCCESS: 'GET_SYMBOL_CHART_DATA_SUCCESS',
  GET_SYMBOL_CHART_DATA_FAILURE: 'GET_SYMBOL_CHART_DATA_FAILURE',
  OPEN_SYMBOL_SOCKET: 'OPEN_SYMBOL_SOCKET',
  CLOSE_SYMBOL_SOCKET: 'CLOSE_SYMBOL_SOCKET',
  RECEIVE_SYMBOL_PRICE: 'RECEIVE_SYMBOL_PRICE',
  SUBSCRIBE_SYMBOL_PRICE: 'SUBSCRIBE_SYMBOL_PRICE',
};

// get symbols action creators
export const getSymbols = userId => ({
  type: ActionTypes.GET_SYMBOLS_REQUEST,
  payload: userId,
});

export const getSymbolsSuccess = symbols => ({
  type: ActionTypes.GET_SYMBOLS_SUCCESS,
  payload: symbols,
});

export const getSymbolsFailure = error => ({
  type: ActionTypes.GET_SYMBOLS_FAILURE,
  payload: error,
});

// get single symbol action creators
export const getSymbol = (userId, symbolId) => ({
  type: ActionTypes.GET_SYMBOL_REQUEST,
  payload: { userId, symbolId },
});

export const getSymbolSuccess = symbol => ({
  type: ActionTypes.GET_SYMBOL_SUCCESS,
  payload: symbol,
});

export const getSymbolFailure = error => ({
  type: ActionTypes.GET_SYMBOL_FAILURE,
  payload: error,
});

// get watchlist action creators
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

// add to watchlist action creators
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

// get symbol chart data action creators
export const getSymbolChartData = (userId, symbolId) => ({
  type: ActionTypes.GET_SYMBOL_CHART_DATA_REQUEST,
  payload: { userId, symbolId },
});

export const getSymbolChartDataSuccess = chartData => ({
  type: ActionTypes.GET_SYMBOL_CHART_DATA_SUCCESS,
  payload: chartData,
});

export const getSymbolChartDataFailure = error => ({
  type: ActionTypes.GET_SYMBOL_CHART_DATA_FAILURE,
  payload: error,
});

// symbol socket action creators
export const receiveSymbolPrice = symbol => ({
  type: ActionTypes.RECEIVE_SYMBOL_PRICE,
  payload: symbol,
});

export const subscribeSymbolPrice = symbolId => ({
  type: ActionTypes.SUBSCRIBE_SYMBOL_PRICE,
  payload: symbolId,
});

export const initSymbolSocket = () => ({
  type: ActionTypes.INIT_SYMBOL_SOCKET,
});

export const openSymbolSocket = () => ({
  type: ActionTypes.OPEN_SYMBOL_SOCKET,
});

export const closeSymbolSocket = () => ({
  type: ActionTypes.CLOSE_SYMBOL_SOCKET,
});
