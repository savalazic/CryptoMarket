// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { type NavigationScreenProp } from 'react-navigation';
import { View } from 'react-native';

import { getWatchlist } from '@services/watchlist/watchlistActions';
import {
  getSymbolsFromWatchlistSelector,
  getWatchlistLoading,
} from '@services/watchlist/watchlistSelectors';
import { getUserAccountId } from '@services/user/userSelectors';

import type { Symbol, Symbols } from '@services/symbol/symbolTypes';

import SymbolList from '@components/SymbolList';
import LoadingContainer from '@components/LoadingContainer';

type Props = {
  userAccountId: string,
  getWatchlist: (userAccountId: string) => void,
  isLoadingWatchlist: boolean,
  symbolsFromWatchlist: Symbols,
  navigation: NavigationScreenProp<{}>,
};

class WatchlistScreen extends Component<Props> {
  componentDidMount() {
    this.props.getWatchlist(this.props.userAccountId);
  }

  handlePressSymbol = (symbol: Symbol) => {
    this.props.navigation.navigate('Symbol', { symbol });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoadingContainer isLoading={this.props.isLoadingWatchlist}>
          <View style={{ width: '100%' }}>
            <SymbolList
              symbols={this.props.symbolsFromWatchlist}
              onSymbolPress={this.handlePressSymbol}
            />
          </View>
        </LoadingContainer>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userAccountId: getUserAccountId(state),
  symbolsFromWatchlist: getSymbolsFromWatchlistSelector(state),
  isLoadingWatchlist: getWatchlistLoading(state),
});

const actions = { getWatchlist };

export default connect(
  mapStateToProps,
  actions,
)(WatchlistScreen);
