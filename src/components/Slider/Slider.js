import React, { Component } from 'react'
import data from './../../utils/slider-data.json'
import Tech from './Tech/Tech'
import './Slider.css'


export default class Slider extends Component {
    constructor() {
        super();
        this.state = {
            value: 0
        }

        this.changeValue = this.changeValue.bind(this)
    }

    changeValue(previousVal, newVal){
        this.setState({
            value: this.state.value - previousVal + newVal
        })
    }
    
    render(){
        return(
            <div id="Slider">
                <h1 className="top_title">Student Value</h1>
                <h2 className="value_total">${this.state.value}</h2>
                <Tech tech={data.react} techName={Object.keys(data)[3]} changeVal={this.changeValue}/>
            </div>
        )
    }
}