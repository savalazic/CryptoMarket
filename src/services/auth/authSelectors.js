import { createSelector } from 'reselect';
import {
  getAllErrorsFromState,
  getErrorStatus,
  getAllLoadersFromState,
  getLoaderStatus,
} from '../utils/utils';
import { ActionTypes } from './authActions';

export const getAuth = state => state.services.auth;
export const getToken = state => state.services.auth.access_token;

export const getLoginError = createSelector(
  getAllErrorsFromState,
  errors => getErrorStatus(errors, ActionTypes.LOGIN_FAILURE),
);

export const getLoginLoading = createSelector(
  getAllLoadersFromState,
  loaders => getLoaderStatus(loaders, ActionTypes.LOGIN_REQUEST),
);
