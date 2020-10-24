import React, { Component } from 'react';

class EyesOnMe extends Component {
    
    handleFocus = () => {
        console.log('Good!')
    }

    handleBlur = () => {
        console.log
    }
    
    render() {
        return (
            <button onFocus={this.handleFocus}  onBlur={this.handleBlur}></button>
        )
            
        
    }
}
export default EyesOnMe;