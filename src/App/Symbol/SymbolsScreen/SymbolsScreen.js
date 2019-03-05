// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { type NavigationScreenProp } from 'react-navigation';
import { Button, Searchbar } from 'react-native-paper';

import { logout } from '@services/auth/authActions';
import { getUserInfoId, getUserAccountId } from '@services/user/userSelectors';
import {
  getSymbols,
  getWatchlist,
  addToWatchlist,
} from '@services/symbol/symbolActions';
import {
  getSymbolsArraySelector,
  getSymbolsLoading,
  getWatchlistLoading,
} from '@services/symbol/symbolSelectors';

import type { Symbol, Symbols } from '@services/symbol/symbolTypes';

import SymbolList from '@components/SymbolList';
import LoadingContainer from '@components/LoadingContainer';
import Container from '@components/Container';
import Box from '@components/Box';

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

type State = {
  searchQuery: string,
};

class SymbolsScreen extends Component<Props, State> {
  state = {
    searchQuery: '',
  };

  componentDidMount() {
    this.props.getSymbols(this.props.userId);
    this.props.getWatchlist(this.props.userAccountId);
  }

  handlePressSymbol = (symbol: Symbol) => {
    // $FlowFixMe
    this.props.navigation.navigate('SingleSymbol', symbol);
  };

  handleFavoritePress = (symbol: Symbol) => {
    this.props.addToWatchlist(this.props.userAccountId, symbol.id);
  };

  onSearchChange = (searchQuery) => {
    this.setState({ searchQuery });
  };

  filterSymbols = (symbols) => {
    const { searchQuery } = this.state;
    // eslint-disable-next-line
    return symbols.filter(symbol => symbol.displayName.toLowerCase().includes(searchQuery.toLowerCase()),);
  };

  render() {
    const { isLoadingSymbols, isLoadingWatchlist, symbols } = this.props;
    const { searchQuery } = this.state;

    const filteredSymbols = this.filterSymbols(symbols);

    return (
      <Container p={0}>
        <Box f={0} p={15}>
          <Searchbar
            placeholder="Search here"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onSearchChange}
            value={searchQuery}
          />
        </Box>
        <LoadingContainer isLoading={isLoadingSymbols || isLoadingWatchlist}>
          <Box f={1}>
            <SymbolList
              symbols={filteredSymbols}
              onSymbolPress={this.handlePressSymbol}
              onFavoritePress={this.handleFavoritePress}
            />
          </Box>
        </LoadingContainer>
        {/* $FlowFixMe */}
        <Button onPress={() => this.props.logout()}>Logout</Button>
      </Container>
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
