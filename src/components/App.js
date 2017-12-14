import React, { Component } from 'react';
import './App.css';
import Slider from './Slider/Slider'

import Chart from './Chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        App

        <Slider/>
        <Chart />

      </div>
    );
  }
}

export default App;
