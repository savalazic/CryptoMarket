// @flow
import has from 'lodash/has';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Text, Button } from 'react-native-paper';
import { type NavigationScreenProp } from 'react-navigation';

import { getSymbol as getSymbolAction } from '@services/symbol/symbolActions';
import { getUserInfoId } from '@services/user/userSelectors';
import {
  getSymbolLoading,
  getSymbolsSelector,
} from '@services/symbol/symbolSelectors';
import { type Symbols } from '@services/symbol/symbolTypes';
import { getNews as getNewsAction } from '@services/news/newsActions';
import { getNewsSelector, getNewsLoading } from '@services/news/newsSelectors';

import LoadingContainer from '@components/LoadingContainer';
import Container from '@components/Container';
import Box from '@components/Box';
import Pagination from '@components/Pagination';
import NewsList from '@components/NewsList';

import styles from './SymbolScreen.style';

type Props = {
  navigation: NavigationScreenProp<{}>,
  userId: string,
  symbols: Symbols,
  getSymbol: (userId: string, symbolId: string) => void,
  getNews: (limit: number, offset: number) => void,
  isSymbolLoading: boolean,
  isNewsLoading: boolean,
  news: any,
};

class SymbolScreen extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('displayName'),
  });

  componentDidMount() {
    const {
      navigation, symbols, getSymbol, userId, getNews,
    } = this.props;
    const symbolId = navigation.getParam('id');

    // $FlowFixMe
    if (!has(symbols, symbolId)) {
      getSymbol(userId, symbolId);
    }

    getNews(5, 0);
  }

  handleLoadMore = (limit, offset) => {
    this.props.getNews(limit, offset);
  };

  render() {
    const { isSymbolLoading, symbols, navigation, isNewsLoading, news } = this.props;
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
      <ScrollView>
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
            <Pagination limit={5} onLoadMore={this.handleLoadMore}>
              {({ loadMore }) => (
                <React.Fragment>
                  <LoadingContainer isLoading={isNewsLoading}>
                    <NewsList news={news} />
                  </LoadingContainer>
                  <Button compact loading={isNewsLoading} disabled={isNewsLoading} onPress={loadMore}>
                    Load more
                  </Button>
                </React.Fragment>
              )}
            </Pagination>
          </Box>
        </LoadingContainer>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  userId: getUserInfoId(state),
  isSymbolLoading: getSymbolLoading(state),
  symbols: getSymbolsSelector(state),
  isNewsLoading: getNewsLoading(state),
  news: getNewsSelector(state),
});

const actions = {
  getSymbol: getSymbolAction,
  getNews: getNewsAction,
};

export default connect(
  mapStateToProps,
  actions,
)(SymbolScreen);
