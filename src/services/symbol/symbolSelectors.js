import { createSelector } from 'reselect';
import { getAllLoadersFromState, getLoaderStatus } from '../utils/utils';
import { ActionTypes } from './symbolActions';

export const getSymbolsSelector = state => state.services.symbol.symbols;

export const getSymbolsLoading = createSelector(
  getAllLoadersFromState,
  loaders => getLoaderStatus(loaders, ActionTypes.GET_SYMBOLS_REQUEST),
);
