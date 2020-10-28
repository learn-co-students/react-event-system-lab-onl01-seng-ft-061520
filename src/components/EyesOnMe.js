import React, { Component } from 'react'

export default class EyesOnMe extends Component {
  handleBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  handleFocus = () => {
    console.log('Good!')
  }

  render() {
    return (
      <div>
        <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Button</button>
      </div>
    )
  }
}
