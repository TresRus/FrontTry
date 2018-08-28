import React, { Component } from 'react';

class LaserButton extends Component {
  activateLasers() {
    console.log("Lasers!!!! Piu piu");
  }

  render() {
    return (
      <button onClick={this.activateLasers}>
        Activate Lasers
      </button>
    );
  }
}

export default LaserButton;
