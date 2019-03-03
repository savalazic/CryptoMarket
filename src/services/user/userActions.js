export const ActionTypes = {
  GET_USER_INFO_REQUEST: 'GET_USER_INFO_REQUEST',
  GET_USER_INFO_SUCCESS: 'GET_USER_INFO_SUCCESS',
  GET_USER_INFO_FAILURE: 'GET_USER_INFO_FAILURE',
};

export const getUserInfo = () => ({
  type: ActionTypes.GET_USER_INFO_REQUEST,
});

export const getUserInfoSuccess = user => ({
  type: ActionTypes.GET_USER_INFO_SUCCESS,
  payload: user,
});

export const getUserInfoFailure = error => ({
  type: ActionTypes.GET_USER_INFO_FAILURE,
  payload: error,
});
