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
import Container from '@components/Container';
import Box from '@components/Box';

import styles from './SymbolScreen.style';

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

    // $FlowFixMe
    if (!has(symbols, symbolId)) {
      getSymbol(userId, symbolId);
    }
  }

  render() {
    const { isSymbolLoading, symbols, navigation } = this.props;
    const symbolId = navigation.getParam('id');

    if (!symbolId) {
      return (
        <Container>
          <Box center>
            <Text>Symbol not found</Text>
          </Box>
        </Container>
      );
    }

    const symbol = symbols[symbolId];

    return (
      <Container p={0}>
        <LoadingContainer isLoading={isSymbolLoading}>
          <Box center>
            <Text style={styles.SymbolPrice}>${symbol.price.ask}</Text>
            <Text>Chart goes here</Text>
          </Box>
          <Box p={15}>
            <Text style={styles.Heading}>About</Text>
            <Text>{symbol.baseInstrument.description}</Text>
          </Box>
          <Box p={15}>
            <Text style={styles.Heading}>News</Text>
          </Box>
        </LoadingContainer>
      </Container>
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
