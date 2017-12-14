import React, { Component } from 'react';
import Chart from './Chart';
import data from '../../utils/chart-data.json';

export default class ChartContainer extends Component {
  toggleSelected( levels, target_index ) {
    let total_copy = this.state.value;

    if ( levels[ target_index ].selected === true ) return;

    levels.forEach( ( level, level_index ) => {
      if ( level_index === target_index ) {
        level.selected = true;
        total_copy += ( level_index + 1 ) * 50;
      } else {
        if ( level.selected ) {
          total_copy -= ( level_index + 1 ) * 50;
        }

        level.selected = false;
      }
    });

    this.setState({ data, value: total_copy });
  }

  constructor() {
    super();

    this.state = {
      data,
      value: 0
    };
  }

  render() {
    return (
      <Chart data={ data } clickEvent={ this.toggleSelected.bind(this) } value={ this.state.value } />
    )
  }
}