// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    eom = ()=>{console.log("Hey! Eyes on me!")}
    good = () => {console.log("Good!")}
    render(){
        return(
            <button onFocus={this.good} onBlur={this.eom} type="password">Button</button>
        )
    }
}