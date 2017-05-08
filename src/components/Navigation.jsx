import React, { Component } from 'react';

class Navigation extends Component {

  render() {
    return (
      <div>
        <p>Please input your location: </p>
        <input id="locationArea" onChange={this.props.onChangeLocation} type="text" placeholder="Location" />
        <br></br>
        <button id="backButton" onClick={this.props.onClickBack}>Back</button>
        <button id="searchButton" onClick={this.props.onClickSearch}>Search</button>
      </div>
    )
  }
}

export default Navigation;