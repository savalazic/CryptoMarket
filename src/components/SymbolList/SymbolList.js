// @flow
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import {
  Text, IconButton, TouchableRipple, Colors,
} from 'react-native-paper';

import type { Symbol, Symbols } from '@services/symbol/symbolTypes';

import Box from '@components/Box';

import { theme } from '../../theme';

import styles from './SymboList.styles';

type Props = {
  onSymbolPress: (symbol: Symbol) => void,
  onFavoritePress: (symbol: Symbol) => void,
  symbols: Symbols,
};

class SymbolList extends Component<Props> {
  keyExtractor = (item: Symbol) => String(item.id);

  onSymbolPress = (symbol: Symbol) => {
    this.props.onSymbolPress(symbol);
  };

  onFavoritePress = (symbol: Symbol) => {
    this.props.onFavoritePress(symbol);
  };

  renderItem = ({ item }: { item: Symbol }) => (
    <TouchableRipple onPress={() => this.onSymbolPress(item)}>
      <Box
        f={1}
        px={10}
        mx={15}
        py={15}
        justify="between"
        align="center"
        dir="row"
        style={styles.Symbol}
      >
        <Box f={1}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.SymbolName}
          >
            {item.displayName}
          </Text>
        </Box>
        <Box f={0} dir="row" align="center">
          <Text style={styles.SymbolPrice}>${item.price.ask}</Text>
          <IconButton
            icon={`favorite${!item.isFollowing ? '-border' : ''}`}
            onPress={() => this.onFavoritePress(item)}
            color={item.isFollowing ? theme.colors.accent : Colors.grey400}
            size={28}
          />
        </Box>
      </Box>
    </TouchableRipple>
  );

  render() {
    return (
      <FlatList
        data={this.props.symbols}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default SymbolList;
