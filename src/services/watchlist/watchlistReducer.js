import { ActionTypes } from './watchlistActions';

export const initialState = {
  symbols: [],
};

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_WATCHLIST_SUCCESS:
      return {
        ...state,
        symbols: action.payload,
      };
    default:
      return state;
  }
};

export default watchlistReducer;
