import React, { Component } from 'react';
import './reset.css'
import './App.css';
import Slider from './Slider/Slider'
import { Switch, Route, Link } from 'react-router-dom'
import devmtn from './../images/logowhiteblue.png'

import Chart from './Chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          window.location.hash === '#/' &&
          
          <nav>
            <img src={devmtn} />
            <p className="title">Student Value Options</p>
            <Link to="/slider"> <p>Slider Option</p> </Link>
            <Link to="/chart"> <p>Chart Option</p> </Link> 
          </nav>
        }

        <Switch>
          <Route path="/slider" component={Slider}/>
          <Chart path="/chart" component={Chart}/>
        </Switch>

      </div>
    );
  }
}

export default App;
