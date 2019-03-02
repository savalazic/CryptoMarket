import get from 'lodash/get';
import replace from 'lodash/replace';

export const getLoaderStatus = (loaders, action) => get(loaders, replace(action, '_REQUEST', ''));

export const getAllLoadersFromState = state => state.services.utils.loaders;
export const getAllErrorsFromState = state => state.services.utils.errors;
export const getErrorStatus = (errors, action) => get(errors, replace(action, '_FAILURE', ''));
