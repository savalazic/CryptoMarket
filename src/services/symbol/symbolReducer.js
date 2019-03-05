import mapKeys from 'lodash/mapKeys';
import assign from 'lodash/assign';
import { omit } from '@utils/objectUtils';
import { ActionTypes } from './symbolActions';

export const initialState = {
  symbols: {},
  watchlist: {},
  chartData: {},
};

const symbolReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SYMBOLS_SUCCESS:
      return {
        ...state,
        symbols: assign({}, {}, mapKeys(action.payload, 'id')),
      };
    case ActionTypes.GET_SYMBOL_SUCCESS:
      return {
        ...state,
        symbols: assign({}, state.symbols, {
          [action.payload.id]: action.payload,
        }),
      };
    case ActionTypes.GET_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchlist: assign({}, {}, mapKeys(action.payload, 'id')),
      };
    case ActionTypes.ADD_TO_WATCHLIST_SUCCESS:
      if (action.payload.isFollowing) {
        return {
          ...state,
          watchlist: assign({}, state.watchlist, {
            [action.payload.id]: action.payload,
          }),
          symbols: assign({}, state.symbols, {
            [action.payload.id]: action.payload,
          }),
        };
      }

      return {
        ...state,
        watchlist: omit(state.watchlist, action.payload.id),
        symbols: assign({}, state.symbols, {
          [action.payload.id]: action.payload,
        }),
      };
    case ActionTypes.GET_SYMBOL_CHART_DATA_SUCCESS:
      return {
        ...state,
        chartData: action.payload,
      };
    default:
      return state;
  }
};

export default symbolReducer;
