// @flow
import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart as RNLineChart } from 'react-native-svg-charts';

import { theme } from '../../theme';

type Props = {
  data: number[],
};

const LineChart = ({ data }: Props) => (
  <React.Fragment>
    <RNLineChart
      animate
      style={{
        height: 100,
        width: Dimensions.get('window').width,
      }}
      data={data}
      svg={{ stroke: theme.colors.primary, strokeWidth: 3 }}
    />
  </React.Fragment>
);

export default LineChart;
