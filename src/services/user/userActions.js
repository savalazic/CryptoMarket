export const ActionTypes = {
  GET_USER_INFO_REQUEST: 'GET_USER_INFO_REQUEST',
  GET_USER_INFO_SUCCESS: 'GET_USER_INFO_SUCCESS',
  GET_USER_INFO_FAILURE: 'GET_USER_INFO_FAILURE',
  GET_USER_ACCOUNTS_REQUEST: 'GET_USER_ACCOUNTS_REQUEST',
  GET_USER_ACCOUNTS_SUCCESS: 'GET_USER_ACCOUNTS_SUCCESS',
  GET_USER_ACCOUNTS_FAILURE: 'GET_USER_ACCOUNTS_FAILURE',
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

export const getUserAccounts = userId => ({
  type: ActionTypes.GET_USER_ACCOUNTS_REQUEST,
  payload: userId,
});

export const getUserAccountsSuccess = accounts => ({
  type: ActionTypes.GET_USER_ACCOUNTS_SUCCESS,
  payload: accounts,
});

export const getUserAccountsFailure = error => ({
  type: ActionTypes.GET_USER_ACCOUNTS_FAILURE,
  payload: error,
});
