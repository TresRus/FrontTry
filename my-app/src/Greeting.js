import React, { Component } from 'react';

class UserGreeting extends Component {
  render() {
    return <h1>Welcome back!</h1>;
  }
}

class GuestGreeting extends Component {
  render() {
    return <h1>Please sing up.</h1>;
  }
}

class Greeting extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }

    return <GuestGreeting />;
  }
}

export default Greeting;
