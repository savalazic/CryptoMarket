import { createSelector } from 'reselect';
import { getAllLoadersFromState, getLoaderStatus } from '../utils/utils';
import { ActionTypes } from './watchlistActions';

export const getSymbolsFromWatchlistSelector = state => state.services.watchlist.symbols;

export const getWatchlistLoading = createSelector(
  getAllLoadersFromState,
  loaders => getLoaderStatus(loaders, ActionTypes.GET_WATCHLIST_REQUEST),
);
