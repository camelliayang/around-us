import React, { Component } from 'react';
import './App.css';

var foursquare = require('foursquarevenues');
const INTERESTS_LIST_ID = 'interestsList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchMode: false,
			location: 'Beijing',
			foursquareClientID: '',
			foursquareClientSecretID: ''
		};
	}

	onInputID = (event) => {
		this.setState({
			foursquareClientID: event.target.value
		});
	}

	onInputSecretID = (event) => {
		this.setState({
			foursquareClientSecretID: event.target.value
		});
	}

	handleSuccess = () => {
		if (this.validateID()) {
			this.setState({ searchMode: true });
		}
	}

	validateID() {
		if (
			this.state.foursquareClientID &&
			this.state.foursquareClientID !== '' &&
			this.state.foursquareClientSecretID &&
			this.state.foursquareClientSecretID !== ''
		) {
			return true;
		}
		return false;
	}

	onChangeLocation = (event) => {
		this.setState({ location: event.target.value });
	}

	onClickBack = () => {
		this.setState({ searchMode: false });
	}

	onClickSearch = () => {
		if (
			this.validateID() &&
			this.state.location &&
			this.state.location !== ''
		) {
			const params = {
				'near': this.state.location
			};
			this.searchPlacesAndShow(params);
		}
	}

	showVenues(groups) {
		if (groups) {
			var elList = document.getElementById(INTERESTS_LIST_ID);

			groups.forEach((group) => {
				group.items.forEach((place) => {
					if (place && place.venue) {
						var interest = JSON.stringify(place.venue.name);
						elList.innerHTML += '<li>' + interest + '</li>';
					}
				});
			});
		}
	}

	searchPlacesAndShow(params) {
		foursquare(this.state.foursquareClientID, this.state.foursquareClientSecretID)
			.exploreVenues(params, (error, places) => {
				if (!error) {
					this.showVenues(places.response.groups);
				}
			});
	}

	renderCredential() {
		return (
			<div>
				<p>Please input your Foursquare Client ID: </p>
				<input onChange={this.onInputID} type="text" placeholder="ClientID" />
				<p>Please input your Foursquare Client Secret ID: </p>
				<input onChange={this.onInputSecretID} type="text" placeholder="Client SecretID" />
				<br></br>
				<br></br>
				<button onClick={this.handleSuccess}>Start</button>
			</div>
		);
	}

	renderSearch() {
		return (
			<div>
				<div>
					<p>Please input your location: </p>
					<input onChange={this.onChangeLocation} type="text" placeholder="Location" />
					<br></br>
					<button onClick={this.onClickBack}>Back</button>
					<button onClick={this.onClickSearch}>Search</button>
				</div>
				<div>Places of Interest Nearby:
					<ul id={INTERESTS_LIST_ID}>
					</ul>
				</div>
			</div>
		);
	}

	render() {
		if (!this.state.searchMode) {
			return this.renderCredential();
		}
		return this.renderSearch();
	}
}

export default App;
