export const ActionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
};

export const login = user => ({
  type: ActionTypes.LOGIN_REQUEST,
  payload: user,
});

export const loginSuccess = user => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = error => ({
  type: ActionTypes.LOGIN_FAILURE,
  payload: error,
});
