import React, { Component } from 'react';

class Place extends Component {

  render() {
    return (
      <li>{this.props.placeName}</li>
    )
  }
}

export default Place;