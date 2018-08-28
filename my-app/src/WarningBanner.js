import React, { Component } from 'react';

class WarningBanner extends Component {
  render() {
    if (!this.props.warning) {
      return null;
    }

    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
}

export default WarningBanner;
