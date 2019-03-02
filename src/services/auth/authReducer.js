import { ActionTypes } from './authActions';

export const initialState = {
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
