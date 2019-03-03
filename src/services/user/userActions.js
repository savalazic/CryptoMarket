export const ActionTypes = {
  GET_USER_REQUEST: 'GET_USER_REQUEST',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAILURE: 'GET_USER_FAILURE',
};

export const getUser = () => ({
  type: ActionTypes.GET_USER_REQUEST,
});

export const getUserSuccess = user => ({
  type: ActionTypes.GET_USER_SUCCESS,
  payload: user,
});

export const getUserFailure = error => ({
  type: ActionTypes.GET_USER_FAILURE,
  payload: error,
});
