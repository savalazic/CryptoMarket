export const ActionTypes = {
  GET_SYMBOLS_REQUEST: 'GET_SYMBOLS_REQUEST',
  GET_SYMBOLS_SUCCESS: 'GET_SYMBOLS_SUCCESS',
  GET_SYMBOLS_FAILURE: 'GET_SYMBOLS_FAILURE',
};

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
