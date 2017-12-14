import React, { Component } from 'react';
import Chart from './Chart';
import data from '../../utils/chart-data.json';

export default class ChartContainer extends Component {
  render() {
    return (
      <Chart data={ data } />
    )
  }
}