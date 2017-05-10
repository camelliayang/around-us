import React, { Component } from 'react';

class PlaceItem extends Component {

  render() {
    return (
      <li>{this.props.placeName}</li>
    )
  }
}

export default PlaceItem;