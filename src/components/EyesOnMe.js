import React, { Component } from 'react';

class EyesOnMe extends Component {
    render() {
        return (
            <div>
                <button onFocus={() => console.log("Good!")} onBlur={() => console.log("Hey! Eyes on me!")}></button>
            </div>
        );
    }
}

export default EyesOnMe;