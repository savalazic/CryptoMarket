// @flow
import has from 'lodash/has';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Text, Button } from 'react-native-paper';
import { type NavigationScreenProp } from 'react-navigation';

import { formatPrice } from '@utils/numberUtils';
import { getUserInfoId } from '@services/user/userSelectors';
import {
  getSymbol,
  getSymbolChartData,
  subscribeSymbolPrice,
  openSymbolSocket,
  closeSymbolSocket,
} from '@services/symbol/symbolActions';
import {
  getSymbolLoading,
  getSymbolsSelector,
  getSymbolChartDataLoading,
  getSymbolsAskChartData,
} from '@services/symbol/symbolSelectors';
import { type Symbols } from '@services/symbol/symbolTypes';
import { getNews } from '@services/news/newsActions';
import { getNewsSelector, getNewsLoading } from '@services/news/newsSelectors';

import LoadingContainer from '@components/LoadingContainer';
import Container from '@components/Container';
import Box from '@components/Box';
import Pagination from '@components/Pagination';
import NewsList from '@components/NewsList';
import LineChart from '@components/LineChart';

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
  getSymbolChartData: (userId: string, symbolId: string) => void,
  isChartDataLoading: boolean,
  symbolAskChartData: number[],
  subscribeSymbolPrice: (symbolId: string) => void,
  openSymbolSocket: () => void,
  closeSymbolSocket: () => void,
};

class SymbolScreen extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('displayName'),
  });

  componentDidMount() {
    const { navigation, symbols, userId } = this.props;
    const symbolId = navigation.getParam('id');

    // $FlowFixMe
    if (!has(symbols, symbolId)) {
      // $FlowFixMe
      this.props.getSymbol(userId, symbolId);
    }

    this.props.getNews(5, 0);
    // $FlowFixMe
    this.props.getSymbolChartData(userId, symbolId);

    // $FlowFixMe
    this.props.subscribeSymbolPrice(symbolId);
    this.props.openSymbolSocket();
  }

  componentWillUnmount() {
    this.props.closeSymbolSocket();
  }

  handleLoadMore = (limit, offset) => {
    this.props.getNews(limit, offset);
  };

  render() {
    const {
      isSymbolLoading,
      symbols,
      navigation,
      isNewsLoading,
      news,
      isChartDataLoading,
      symbolAskChartData,
    } = this.props;
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
          <Box center py={30}>
            <Text style={styles.SymbolPrice}>
              {formatPrice(symbol.price.ask)}
            </Text>
            <Box my={30}>
              <LoadingContainer isLoading={isChartDataLoading}>
                <LineChart data={symbolAskChartData} />
              </LoadingContainer>
            </Box>
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
                  <Button
                    disabled={isNewsLoading}
                    onPress={loadMore}
                    style={styles.Button}
                  >
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
  isChartDataLoading: getSymbolChartDataLoading(state),
  symbolAskChartData: getSymbolsAskChartData(state),
});

const actions = {
  getSymbol,
  getNews,
  getSymbolChartData,
  subscribeSymbolPrice,
  openSymbolSocket,
  closeSymbolSocket,
};

export default connect(
  mapStateToProps,
  actions,
)(SymbolScreen);
