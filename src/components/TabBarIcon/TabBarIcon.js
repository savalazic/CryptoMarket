// @flow
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  tintColor: string,
  name: string,
};

const TabBarIcon = ({ tintColor, name }: Props) => (
  <MaterialIcons
    style={{ backgroundColor: 'transparent' }}
    name={name}
    color={tintColor}
    size={24}
  />
);

export default TabBarIcon;
