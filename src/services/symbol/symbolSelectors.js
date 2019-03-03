import map from 'lodash/map';
import { createSelector } from 'reselect';
import { getAllLoadersFromState, getLoaderStatus } from '../utils/utils';
import { ActionTypes } from './symbolActions';

export const getSymbolsSelector = state => state.services.symbol.symbols;

export const getSymbolsLoading = createSelector(
  getAllLoadersFromState,
  loaders => getLoaderStatus(loaders, ActionTypes.GET_SYMBOLS_REQUEST),
);

export const getSymbolsArraySelector = createSelector(
  getSymbolsSelector,
  symbols => map(symbols),
);

export const getSymbolsFromWatchlistSelector = state => state.services.symbol.watchlist;

export const getWatchlistLoading = createSelector(
  getAllLoadersFromState,
  loaders => getLoaderStatus(loaders, ActionTypes.GET_WATCHLIST_REQUEST),
);

export const getSymbolsFromWatchlistArraySelector = createSelector(
  getSymbolsFromWatchlistSelector,
  symbols => map(symbols),
);
