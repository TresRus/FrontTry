import React, { Component } from 'react';
import Dialog from './Dialog';

class WelcomeDialog extends Component {
  render() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
    );
  }
}

export default WelcomeDialog;
