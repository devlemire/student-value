import React, { Component } from 'react'
// import data from './../../utils/slider-data.json'
import './SliderReusable.css'

export default class SliderReusable extends Component {
    
    constructor() {
        super();
        this.state = {
            level: 0,
            showModal: false
        }
    }

    componentWillMount(){
        if(this.props.isFirst){
            this.setState({
                showModal: true
            })
        }
    }

    closeModal(){
        this.setState({
            showModal: false
        })
    }

    render(){
        return(
            <div className="SliderReusable">
                <div className="labels">
                    <div className="label internLabel">Intern</div>
                    <div className="label inner">Junior</div>
                    <div className="label inner">Mid Level</div>
                    <div className="label lastLabel">Senior</div>
                </div>
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
                    <input type="range" list="tickmarks" onChange={(e) => this.props.changeLevel(e.target.value)} className="slider" min="0" max="126" step="14"/>
                    <div className="instructionModal" style={{display: this.state.showModal ? 'block' : 'none'}}>
                        <div id="talkbubble">
                            <p>
                                Slide the bar to the desired developer skill level to see 
                                detailed descriptions and calculate total student value.
                                <p className="closeModal" onClick={() => this.closeModal()}>
                                    Close
                                </p>
                            </p>
                        </div>
                    </div>                    
                </div>
                <div id="functionalityDisable" style={{display: this.state.showModal ? 'block' : 'none'}}/>
            </div>
        )
    }
}