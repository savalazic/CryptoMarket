// @flow
import React, { type Node } from 'react';
import { View } from 'react-native';

import {
  justifyBoxUtil,
  alignBoxUtil,
  directionUtil,
  centerUtil,
} from './boxUtils';

type Props = {
  children: Node,
  style?: {},
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly',
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline',
  dir?: 'col' | 'col-reverse' | 'row' | 'row-reverse',
  f?: number,
  center?: boolean,
  m?: number,
  mx?: number,
  my?: number,
  p?: number,
  px?: number,
  py?: number,
};

const Box = ({
  children,
  style,
  justify,
  align,
  dir,
  f = 1,
  center = false,
  m,
  mx,
  my,
  p,
  px,
  py,
}: Props) => (
  <View
    style={[
      {
        justifyContent: justify && justifyBoxUtil(justify),
        alignItems: align && alignBoxUtil(align),
        flexDirection: dir && directionUtil(dir),
        flex: f,
      },
      center && centerUtil(),
      {
        margin: m,
        marginVertical: my,
        marginHorizontal: mx,
        padding: p,
        paddingVertical: py,
        paddingHorizontal: px,
      },
      style,
    ]}
  >
    {children}
  </View>
);

export default Box;
