// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import { getWatchlist } from '@services/watchlist/watchlistActions';
import { getUserAccountId } from '@services/user/userSelectors';

type Props = {
  userAccountId: string,
  getWatchlist: (userAccountId: string) => void,
};

class WatchlistScreen extends Component<Props> {
  componentDidMount() {
    this.props.getWatchlist(this.props.userAccountId);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <Text>Watchlist!</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userAccountId: getUserAccountId(state),
});

const actions = { getWatchlist };

export default connect(
  mapStateToProps,
  actions,
)(WatchlistScreen);
