import React, { Component } from 'react';
import './reset.css'
import './App.css';
import Slider from './Slider/Slider'

import Chart from './Chart';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Slider/>
        <Chart />

      </div>
    );
  }
}

export default App;
