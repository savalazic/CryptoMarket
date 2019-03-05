// @flow
import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { format } from 'date-fns';

import Box from '@components/Box';

import styles from './NewsList.styles';

type Props = {
  news: any,
};

class NewsList extends Component<Props> {
  keyExtractor = (item: any) => String(item.id);

  renderItem = ({ item }: { item: any }) => (
    <Box f={1} py={15} style={styles.News}>
      <Box>
        <Text style={styles.Title}>{item.title}</Text>
      </Box>
      <Box>
        <Text style={styles.Date}>
          {format(item.published, 'DD. MMM YYYY.')}
        </Text>
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
