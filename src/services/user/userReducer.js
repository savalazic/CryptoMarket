import { ActionTypes } from './userActions';

export const initialState = {
  info: {},
  accounts: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        info: action.payload,
      };
    case ActionTypes.GET_USER_ACCOUNTS_SUCCESS:
      return {
        ...state,
        accounts: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
