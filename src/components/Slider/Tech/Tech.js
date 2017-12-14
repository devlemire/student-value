import React, { Component } from 'react'
// import data from './../../utils/slider-data.json'
import Slider from './../SliderReusable/SliderReuseable'
import './Tech.css'

export default class Tech extends Component {
    constructor() {
        super();
        this.state = {
            level: "",
            subLevel: "",
            statement: "",
            dictionary: {
                "0": "intern|none",
                "14": "junior|low",
                "28": "junior|mid",
                "42": "junior|high",
                "56": "mid_level|low",
                "70": "mid_level|mid",
                "84": "mid_level|high",
                "98": "senior|low",
                "112": "senior|mid",
                "126": "senior|high"
            },
        }

        this.changeLevel = this.changeLevel.bind(this)
    }

    changeLevel(val){
        let level = this.state.dictionary[`${val}`].split('|')
        let prevValue = 0
        if(this.state.level){
            prevValue = this.props.tech[this.state.level][this.state.subLevel]["value"]
        }
        this.setState({
            level: level[0],
            subLevel: level[1],
            statement: this.props.tech[level[0]][level[1]]["statement"]
        })
        this.props.changeVal(prevValue, this.props.tech[level[0]][level[1]]["value"])

    }

    render(){
        return(
            <div className={`Tech${this.props.isFirst ? ' isFirst' : ''}`}>
                <h1 className="title">{this.props.techName}</h1>
                
                <Slider tech={this.props.tech} changeLevel={this.changeLevel} isFirst={this.props.isFirst} />
                <div className="statement">
                    {
                        this.state.subLevel ?

                        <div>
                            <h1>{this.state.level.split('_').join(' ')}</h1>
                            <h2>Rank: {this.state.subLevel}</h2>
                            <ul>{this.state.statement.split('|').map((e, i) => {
                                    return <li key={this.props.techName + i}>{e}</li>
                                })}
                            </ul>
                        </div>

                        :

                        <div>
                            <h1>Move the slider to choose a skill level & estimate value added.</h1>
                        </div>
                    }
                    
                </div>
            </div>
        )
    }
}