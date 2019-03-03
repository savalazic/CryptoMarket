import { createSelector } from 'reselect';
import { getAllErrorsFromState, getErrorStatus } from '../utils/utils';
import { ActionTypes } from './authActions';

export const getAuth = state => state.services.auth;
export const getToken = state => state.services.auth.access_token;

export const getLoginError = createSelector(
  getAllErrorsFromState,
  errors => getErrorStatus(errors, ActionTypes.LOGIN_FAILURE),
);
