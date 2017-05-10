import React, { Component } from 'react';
import FoursquareAuth from './FoursquareAuth';
import Navigation from './Navigation';
import ResultList from './ResultList';
import Client from '../Client'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchMode: false, // For whether to show search view or not
			foursquareClientID: '',
			foursquareClientSecretID: '',
			location: '', // For input location
			venues: null, // For search results
			myCoords: null // Current coordinate
		};
	}

	/**
	 * When user inputs foursquareClientID, set it to the state.
	 * @param {Object} Current event.
	 */
	onInputID = (event) => {
		this.setState({
			foursquareClientID: event.target.value
		});
	}

	/**
	 * When user inputs foursquareClientSecretID, set it to the state.
	 * @param {Object} Current event.
	 */
	onInputSecretID = (event) => {
		this.setState({
			foursquareClientSecretID: event.target.value
		});
	}

	/**
	 * If two ID inputs are there, set searchMode to the state.
	 */
	handleSuccess = () => {
		if (this.state.foursquareClientID &&
			this.state.foursquareClientID !== '' &&
			this.state.foursquareClientSecretID &&
			this.state.foursquareClientSecretID !== ''
		) {
			this.setState({ searchMode: true });
		}
	}

	/**
	 * When user clicks back button, set searchMode to false 
	 * and clear IDs.
	 */
	onClickBack = () => {
		this.setState({
			searchMode: false,
			foursquareClientID: '',
			foursquareClientSecretID: ''
		});
	}

	/**
	 * If user inputs location in search view, set it to the state.
	 * @param{Object} Current event.
	 */
	onChangeLocation = (event) => {
		this.setState({ location: event.target.value });
	}

	/**
	 * If user clicks search button, check IDs and location,
	 * if everything is there, pass location and call search function.
	 * if IDs or location are empty, do nothing.
	 */
	onClickSearch = () => {
		if (
			this.state.foursquareClientID &&
			this.state.foursquareClientID !== '' &&
			this.state.foursquareClientSecretID &&
			this.state.foursquareClientSecretID !== '' &&
			this.state.location &&
			this.state.location !== ''
		) {
			const params = {
				'near': this.state.location
			};
			this.searchPlacesAndShow(params);
		}
	}

	/**
	 * Use Foursquare library to call API.
	 * If the response is there, pass response and set venues array to state.
	 * If not, clear venues array.
	 * @param{Object} Location
	 */
	searchPlacesAndShow(params) {
		Client.explore(this.state.foursquareClientID, this.state.foursquareClientSecretID, params, (venueGroups) => {
			this.setVenues(venueGroups);
		});
	}

	/**
	 * Set the venues array by venues groups.
	 * Right now we only use the first group as recommended group.
	 * If group has nothing, clear venues.
	 * @param{Array} Venues group array.
	 */
	setVenues(groups) {
		if (groups && groups.length > 0) {
			this.setState({
				venues: groups[0].items
			});
		} else {
			this.setState({
				venues: null
			});
		}
	}

	onPositionSuccess = (position) => {
		this.setState({
			myCoords: position.coords
		});
		const coordinateString =
			position.coords.latitude + ',' + position.coords.longitude;
		const params = {
			'll': coordinateString
		};
		this.searchPlacesAndShow(params);
	}

	onPositionError = (positionError) => {
		this.setState({
			myCoords: null,
		});
		console.error("Cannot get location: " + positionError.message);
	}

	/**
	 * Used to get user's current location
	 * If success, search and show the nearby list.
	 * If not success, print error.
	 */
	getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.onPositionSuccess, this.onPositionError);
		} else {
			console.log("Current broswer doesn't support get location");
		}
	}

	renderCredential() {
		return (
			<div className="App">
				<FoursquareAuth
					foursquareClientID={this.state.foursquareClientID}
					foursquareClientSecretID={this.state.foursquareClientSecretID}
					onInputID={this.onInputID}
					onInputSecretID={this.onInputSecretID}
					handleSuccess={this.handleSuccess}
				/>
			</div>
		);
	}

	renderSearch() {
		return (
			<div className="App">
				<Navigation
					onClickBack={this.onClickBack}
					onClickSearch={this.onClickSearch}
					onChangeLocation={this.onChangeLocation}
					onClickGetLocation={this.getLocation}
				/>
				{this.state.venues && <ResultList venues={this.state.venues} />}
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
