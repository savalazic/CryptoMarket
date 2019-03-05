// @flow
import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { format } from 'date-fns';

import Box from '@components/Box';

type Props = {
  news: any,
};

class NewsList extends Component<Props> {
  keyExtractor = (item: any) => String(item.id);

  renderItem = ({ item }: { item: any }) => (
    <Box f={1} py={15} justify="between" align="center" dir="row">
      <Box f={1}>
        <Text>{item.title}</Text>
      </Box>
      <Box f={0} dir="row" align="center">
        <Text>{format(item.published, 'DD. MMM. YYYY.')}</Text>
      </Box>
    </Box>
  );

  render() {
    return (
      <FlatList
        data={this.props.news}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default NewsList;
