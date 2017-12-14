import React, { Component } from 'react'
import data from './../../utils/slider-data.json'
import Tech from './Tech/Tech'
import './Slider.css'


export default class Slider extends Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            dataKeys: []
        }

        this.changeValue = this.changeValue.bind(this)
    }

    componentWillMount() {
        this.setState({
            dataKeys: Object.keys(data)
        })
    }

    changeValue(previousVal, newVal){
        this.setState({
            value: this.state.value - previousVal + newVal
        })
    }
    
    render(){
        return(
            <div id="Slider">
                <header>
                    <h1 className="top_title">Student Value</h1>
                    <h2 className="value_total">${this.state.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                </header>
                {this.state.dataKeys.map((e, i) => [
                    <Tech tech={data[e]} 
                          techName={e} 
                          changeVal={this.changeValue}
                          isFirst={i === 0}
                          key={e}/>
                ])} 
            </div>
        )
    }
}