import { ActionTypes } from './userActions';

export const initialState = {
  // info: {},
  // accounts: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_INFO_SUCCESS:
      return action.payload;
    // return {
    //   ...state,
    //   info: action.payload,
    //   accounts: action.payload.accounts,
    // };
    default:
      return state;
  }
};

export default userReducer;
