// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { type NavigationScreenProp } from 'react-navigation';
import { Button } from 'react-native-paper';

import { logout } from '@services/auth/authActions';
import { getUserInfoId, getUserAccountId } from '@services/user/userSelectors';
import { getSymbols, addToWatchlist } from '@services/symbol/symbolActions';
import {
  getSymbolsSelector,
  getSymbolsArraySelector,
  getSymbolsLoading,
} from '@services/symbol/symbolSelectors';

import type { Symbol, Symbols } from '@services/symbol/symbolTypes';

import SymbolList from '@components/SymbolList';
import LoadingContainer from '@components/LoadingContainer';

type Props = {
  navigation: NavigationScreenProp<{}>,
  userId: string,
  userAccountId: string,
  getSymbols: (userId: string) => void,
  isLoadingSymbols: boolean,
  symbols: Symbols,
  addToWatchlist: (accountId: string, symbolId: string) => void,
};

class SymbolsScreen extends Component<Props> {
  componentDidMount() {
    this.props.getSymbols(this.props.userId);
  }

  handlePressSymbol = (symbol: Symbol) => {
    this.props.navigation.navigate('SingleSymbol', symbol);
  };

  handleFavouritePress = (symbol: Symbol) => {
    this.props.addToWatchlist(this.props.userAccountId, symbol.id);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoadingContainer isLoading={this.props.isLoadingSymbols}>
          <View style={{ width: '100%' }}>
            <SymbolList
              symbols={this.props.symbols}
              onSymbolPress={this.handlePressSymbol}
              onFavouritePress={this.handleFavouritePress}
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
});

const actions = {
  logout,
  getSymbols,
  addToWatchlist,
};

export default connect(
  mapStateToProps,
  actions,
)(SymbolsScreen);
