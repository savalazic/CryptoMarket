// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { type NavigationScreenProp } from 'react-navigation';
import { Button } from 'react-native-paper';

import { logout } from '@services/auth/authActions';
import { getUserInfoId, getUserAccountId } from '@services/user/userSelectors';
import {
  getSymbols,
  getWatchlist,
  addToWatchlist,
} from '@services/symbol/symbolActions';
import {
  getSymbolsSelector,
  getSymbolsArraySelector,
  getSymbolsLoading,
  getWatchlistLoading,
} from '@services/symbol/symbolSelectors';

import type { Symbol, Symbols } from '@services/symbol/symbolTypes';

import SymbolList from '@components/SymbolList';
import LoadingContainer from '@components/LoadingContainer';

type Props = {
  navigation: NavigationScreenProp<{}>,
  userId: string,
  userAccountId: string,
  getSymbols: (userId: string) => void,
  getWatchlist: (userAccountId: string) => void,
  isLoadingSymbols: boolean,
  isLoadingWatchlist: boolean,
  symbols: Symbols,
  addToWatchlist: (accountId: string, symbolId: string) => void,
};

class SymbolsScreen extends Component<Props> {
  componentDidMount() {
    this.props.getSymbols(this.props.userId);
    this.props.getWatchlist(this.props.userAccountId);
  }

  handlePressSymbol = (symbol: Symbol) => {
    this.props.navigation.navigate('SingleSymbol', symbol);
  };

  handleFavoritePress = (symbol: Symbol) => {
    this.props.addToWatchlist(this.props.userAccountId, symbol.id);
  };

  render() {
    const { isLoadingSymbols, isLoadingWatchlist, symbols } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <LoadingContainer isLoading={isLoadingSymbols || isLoadingWatchlist}>
          <View style={{ width: '100%' }}>
            <SymbolList
              symbols={symbols}
              onSymbolPress={this.handlePressSymbol}
              onFavoritePress={this.handleFavoritePress}
            />
          </View>
        </LoadingContainer>
        <Button onPress={() => this.props.logout()}>Logout</Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userId: getUserInfoId(state),
  userAccountId: getUserAccountId(state),
  symbols: getSymbolsArraySelector(state),
  isLoadingSymbols: getSymbolsLoading(state),
  isLoadingWatchlist: getWatchlistLoading(state),
});

const actions = {
  logout,
  getSymbols,
  getWatchlist,
  addToWatchlist,
};

export default connect(
  mapStateToProps,
  actions,
)(SymbolsScreen);
