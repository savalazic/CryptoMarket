import { ActionTypes } from './userActions';

export const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
