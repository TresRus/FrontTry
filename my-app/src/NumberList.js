import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return <li>{this.props.value}</li>;
  }
}

class NumberList extends Component {
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) =>
      <ListItem key={number.toString()}
                value={number} /> 
    );

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default NumberList;
