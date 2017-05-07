import React, { Component } from 'react';

class FousquareAuth extends Component {

  render() {
    return (
      <div>
        <p>Please input your Foursquare Client ID: </p>
        <input onChange={this.props.onInputID} type="text" placeholder="ClientID" />
        <p>Please input your Foursquare Client Secret ID: </p>
        <input onChange={this.props.onInputSecretID} type="text" placeholder="Client SecretID" />
        <br></br>
        <br></br>
        <button onClick={this.props.handleSuccess}>Start</button>
      </div>
    )
  }
}

export default FousquareAuth;