import React, { Component } from 'react';

class Keypad extends Component {

  password = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.password}></input>
      </div>
    );
  }

}

export default Keypad;
