// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

  sober() {
    console.log("Good!")
  }

  acid() {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <button onFocus={this.sober} onBlur={this.acid}>Button</button>
    )
       
  }
}