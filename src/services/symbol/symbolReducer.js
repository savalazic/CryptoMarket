import { ActionTypes } from './symbolActions';

export const initialState = {
  symbols: [],
};

const symbolReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SYMBOLS_SUCCESS:
      return {
        ...state,
        symbols: action.payload,
      };
    default:
      return state;
  }
};

export default symbolReducer;
