import { createSelector } from 'reselect';
import { getAllErrorsFromState, getErrorStatus } from '../utils/utils';
import { ActionTypes } from './authActions';

export const getUser = state => state.services.auth.user;

export const getLoginError = createSelector(
  getAllErrorsFromState,
  errors => getErrorStatus(errors, ActionTypes.LOGIN_FAILURE),
);
