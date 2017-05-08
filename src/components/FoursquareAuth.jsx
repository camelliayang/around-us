import React, { Component } from 'react';
import '../styles/App.css';

class FousquareAuth extends Component {

  render() {
    return (
      <div>
        <p className="App-intro">Please input your Foursquare Client ID and Client Secret ID: </p>
        <input id="clientID" onChange={this.props.onInputID} type="text" placeholder="ClientID" />
        <br></br>
        <input id="clientSecretID" onChange={this.props.onInputSecretID} type="text" placeholder="Client SecretID" />
        <br></br>
        <br></br>
        <button id="startButton" onClick={this.props.handleSuccess}>Start</button>
      </div>
    )
  }
}

export default FousquareAuth;