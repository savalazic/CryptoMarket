import { createSelector } from 'reselect';
import {
  getAllLoadersFromState,
  getLoaderStatus,
  getAllErrorsFromState,
  getErrorStatus,
} from '../utils/utils';
import { ActionTypes } from './newsActions';

export const getNewsSelector = state => state.services.news.results;

export const getNewsLoading = createSelector(
  getAllLoadersFromState,
  loaders => getLoaderStatus(loaders, ActionTypes.GET_NEWS_REQUEST),
);

export const getNewsError = createSelector(
  getAllErrorsFromState,
  errors => getErrorStatus(errors, ActionTypes.GET_NEWS_FAILURE),
);
