import { ActionTypes } from './authActions';

export const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case ActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
