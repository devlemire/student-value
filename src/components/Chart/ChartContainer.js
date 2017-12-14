import React, { Component } from 'react';
import Chart from './Chart';
import data from '../../utils/chart-data.json';

export default class ChartContainer extends Component {
  toggleSelected( levels, target_index ) {
    let value_copy = this.state.value;

    if ( levels[ target_index ].selected === true ) return;

    levels.forEach( ( level, level_index ) => {
      if ( level_index === target_index ) {
        level.selected = true;
        value_copy += ( level_index + 1 ) * 50;
      } else {
        if ( level.selected ) {
          value_copy -= ( level_index + 1 ) * 50;
        }

        level.selected = false;
      }
    });

    this.setState({ data, value: value_copy });
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