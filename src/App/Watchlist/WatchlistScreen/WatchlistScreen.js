// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { type NavigationScreenProp } from 'react-navigation';
import { View } from 'react-native';

import { getWatchlist, addToWatchlist } from '@services/symbol/symbolActions';
import {
  getSymbolsFromWatchlistArraySelector,
  getWatchlistLoading,
} from '@services/symbol/symbolSelectors';
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
  addToWatchlist: (accountId: string, symbolId: string) => void,
};

class WatchlistScreen extends Component<Props> {
  componentDidMount() {
    this.props.getWatchlist(this.props.userAccountId);
  }

  handlePressSymbol = (symbol: Symbol) => {
    this.props.navigation.navigate('SingleSymbol', symbol);
  };

  handleFavoritePress = (symbol: Symbol) => {
    this.props.addToWatchlist(this.props.userAccountId, symbol.id);
  };

  render() {
    const { isLoadingWatchlist, symbolsFromWatchlist } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <LoadingContainer isLoading={isLoadingWatchlist}>
          <View style={{ width: '100%' }}>
            <SymbolList
              symbols={symbolsFromWatchlist}
              onSymbolPress={this.handlePressSymbol}
              onFavoritePress={this.handleFavoritePress}
            />
          </View>
        </LoadingContainer>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userAccountId: getUserAccountId(state),
  symbolsFromWatchlist: getSymbolsFromWatchlistArraySelector(state),
  isLoadingWatchlist: getWatchlistLoading(state),
});

const actions = { getWatchlist, addToWatchlist };

export default connect(
  mapStateToProps,
  actions,
)(WatchlistScreen);
