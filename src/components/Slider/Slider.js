import React, { Component } from 'react'
import data from './../../utils/slider-data.json'

export default class Slider extends Component {
    
    render(){
        return(
            <div id="Slider">
                {console.log(data)}
            </div>
        )
    }
}