import React, { Component } from 'react';

class Navigation extends Component {

  render() {
    return (
      <div>
        <p>Please input your location: </p>
        <input onChange={this.props.onChangeLocation} type="text" placeholder="Location" />
        <br></br>
        <button onClick={this.props.onClickBack}>Back</button>
        <button onClick={this.props.onClickSearch}>Search</button>
      </div>
    )
  }
}

export default Navigation;