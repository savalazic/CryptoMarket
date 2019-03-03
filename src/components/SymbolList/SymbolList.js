// @flow
import React, { Component } from 'react';
import {
  FlatList, View, StyleSheet, TouchableOpacity,
} from 'react-native';
import { Text, IconButton } from 'react-native-paper';

import type { Symbol, Symbols } from '@services/symbol/symbolTypes';

type Props = {
  onSymbolPress: (symbol: Symbol) => void,
  onFavouritePress: (symbol: Symbol) => void,
  symbols: Symbols,
};

const styles = StyleSheet.create({
  symbol: {
    padding: 30,
    textAlign: 'left',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  symbol_actions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

class SymbolList extends Component<Props> {
  keyExtractor = (item: Symbol) => String(item.id);

  onSymbolPress = (symbol: Symbol) => {
    this.props.onSymbolPress(symbol);
  };

  onFavouritePress = (symbol: Symbol) => {
    this.props.onFavouritePress(symbol);
  };

  renderItem = ({ item }: { item: Symbol }) => (
    <TouchableOpacity onPress={() => this.onSymbolPress(item)}>
      <View style={styles.symbol}>
        <Text>{item.displayName}</Text>
        <View style={styles.symbol_actions}>
          <Text>${item.price.ask}</Text>
          <IconButton
            icon="favorite"
            onPress={() => this.onFavouritePress(item)}
          />
        </View>
      </View>
    </TouchableOpacity>
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
