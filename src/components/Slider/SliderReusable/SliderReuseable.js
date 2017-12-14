import React, { Component } from 'react'
// import data from './../../utils/slider-data.json'
import './SliderReusable.css'

export default class SliderReusable extends Component {
    
    constructor() {
        super();
        this.state = {
            level: 0
        }
    }

    handleChange(val){
        
    }
    render(){
        return(
            <div className="SliderReusable">
                <div className="bar">
                    <div className="bar_block intern"/>
                    <div className="bar_block junior low"/>
                    <div className="bar_block junior mid"/>
                    <div className="bar_block junior high"/>
                    <div className="bar_block mid_level low"/>
                    <div className="bar_block mid_level mid"/>
                    <div className="bar_block mid_level high"/>
                    <div className="bar_block senior low"/>
                    <div className="bar_block senior mid"/>
                    <div className="bar_block senior high"/>
                </div>
                <div className="slider_bar">
                    {/* <div className="slider"/> */}
                    <input type="range" list="tickmarks" onChange={(e) => this.props.changeLevel(e.target.value)} className="slider" min="0" max="126" step="14"/>
                    
                </div>
            </div>
        )
    }
}