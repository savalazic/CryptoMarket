import mapKeys from 'lodash/mapKeys';
import assign from 'lodash/assign';
import { ActionTypes } from './symbolActions';

export const initialState = {
  symbols: {},
  watchlist: {},
};

const symbolReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SYMBOLS_SUCCESS:
      return {
        ...state,
        symbols: assign({}, {}, mapKeys(action.payload, 'id')),
      };
    case ActionTypes.GET_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchlist: assign({}, {}, mapKeys(action.payload, 'id')),
      };
    case ActionTypes.ADD_TO_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchlist: assign({}, state.watchlist, {
          [action.payload.id]: action.payload,
        }),
      };
    default:
      return state;
  }
};

export default symbolReducer;
