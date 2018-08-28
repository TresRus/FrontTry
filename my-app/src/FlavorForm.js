import React, { Component } from 'react';

class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.props.flavours[this.state.value]);
    event.preventDefault();
  }

  render() {
    const flavours = this.props.flavours;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavour:
          <select value={this.state.value} onChange={this.handleChange}>
            {Object.keys(flavours).map((key) =>
              <option key={key}
                      value={key}>
                {flavours[key]}
              </option>
            )}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlavorForm;
