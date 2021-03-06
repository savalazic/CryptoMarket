import has from 'lodash/has';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import { createSelector } from 'reselect';
import {
  getAllLoadersFromState,
  getLoaderStatus,
  getAllErrorsFromState,
  getErrorStatus,
} from '../utils/utils';
import { ActionTypes } from './symbolActions';

export const getSymbolsSelector = state => state.services.symbol.symbols;
export const getSymbolsFromWatchlistSelector = state => state.services.symbol.watchlist;
export const getSymbolChartDataSelector = state => state.services.symbol.chartData;

export const getSymbolsLoading = createSelector(
  getAllLoadersFromState,
  loaders => getLoaderStatus(loaders, ActionTypes.GET_SYMBOLS_REQUEST),
);

export const getSymbolsError = createSelector(
  getAllErrorsFromState,
  errors => getErrorStatus(errors, ActionTypes.GET_SYMBOLS_FAILURE),
);

export const getSymbolLoading = createSelector(
  getAllLoadersFromState,
  loaders => getLoaderStatus(loaders, ActionTypes.GET_SYMBOL_REQUEST),
);

export const getSymbolError = createSelector(
  getAllErrorsFromState,
  errors => getErrorStatus(errors, ActionTypes.GET_SYMBOL_FAILURE),
);

export const getSymbolChartDataLoading = createSelector(
  getAllLoadersFromState,
  loaders => getLoaderStatus(loaders, ActionTypes.GET_SYMBOL_CHART_DATA_REQUEST),
);

export const getSymbolChartDataError = createSelector(
  getAllErrorsFromState,
  errors => getErrorStatus(errors, ActionTypes.GET_SYMBOL_CHART_DATA_FAILURE),
);

export const getSymbolsMapSelector = createSelector(
  [getSymbolsSelector, getSymbolsFromWatchlistSelector],
  (symbols, watchlist) => reduce(
    symbols,
    (symbol, value, key) => {
      // eslint-disable-next-line
        symbols[key] = {
        ...value,
        isFollowing: has(watchlist, key),
      };
      return symbols;
    },
    {},
  ),
);

export const getSymbolsArraySelector = createSelector(
  [getSymbolsSelector, getSymbolsFromWatchlistSelector],
  (symbols, watchlist) => map(symbols, symbol => ({
    ...symbol,
    isFollowing: has(watchlist, symbol.id),
  })),
);

export const getWatchlistLoading = createSelector(
  getAllLoadersFromState,
  loaders => getLoaderStatus(loaders, ActionTypes.GET_WATCHLIST_REQUEST),
);

export const getSymbolsFromWatchlistArraySelector = createSelector(
  getSymbolsFromWatchlistSelector,
  symbols => map(symbols, symbol => ({
    ...symbol,
    isFollowing: true,
  })),
);

export const getSymbolsAskChartData = createSelector(
  getSymbolChartDataSelector,
  symbols => map(symbols, symbol => symbol.ask_open),
);
