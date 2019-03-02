export const ActionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
};

export const login = (email, password) => ({
  type: ActionTypes.LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const loginSuccess = user => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = error => ({
  type: ActionTypes.LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: ActionTypes.LOGOUT,
});
