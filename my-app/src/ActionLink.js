import React, { Component } from 'react';

class ActionLink extends Component {
  handleClick(e) {
    e.preventDefault();
    console.log("Msg: " + this.props.message);
  }

  render() {
    return (
      <a href="#" onClick={this.handleClick.bind(this)}>
        Click me
      </a>
    )
  }
}

export default ActionLink;
