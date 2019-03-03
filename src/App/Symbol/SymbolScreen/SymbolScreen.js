// @flow
import has from 'lodash/has';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { type NavigationScreenProp } from 'react-navigation';

import { getSymbol as getSymbolAction } from '@services/symbol/symbolActions';
import { getUserInfoId } from '@services/user/userSelectors';
import {
  getSymbolLoading,
  getSymbolsSelector,
} from '@services/symbol/symbolSelectors';
import { type Symbols } from '@services/symbol/symbolTypes';

import LoadingContainer from '@components/LoadingContainer';

type Props = {
  navigation: NavigationScreenProp<{}>,
  userId: string,
  symbols: Symbols,
  getSymbol: (userId: string, symbolId: string) => void,
  isSymbolLoading: boolean,
};

class SymbolScreen extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('displayName'),
  });

  componentDidMount() {
    const {
      navigation, symbols, getSymbol, userId,
    } = this.props;
    const symbolId = navigation.getParam('id');

    if (!has(symbols, symbolId)) {
      getSymbol(userId, symbolId);
    }
  }

  render() {
    const { isSymbolLoading, symbols, navigation } = this.props;
    const symbolId = navigation.getParam('id');

    if (!symbolId) {
      return (
        <View>
          <Text>Symbol not found</Text>
        </View>
      );
    }

    const symbol = symbols[symbolId];

    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <LoadingContainer isLoading={isSymbolLoading}>
          <Text>{symbol.baseInstrument.description}</Text>
        </LoadingContainer>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userId: getUserInfoId(state),
  isSymbolLoading: getSymbolLoading(state),
  symbols: getSymbolsSelector(state),
});
const actions = {
  getSymbol: getSymbolAction,
};

export default connect(
  mapStateToProps,
  actions,
)(SymbolScreen);
