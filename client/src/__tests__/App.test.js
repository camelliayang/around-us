import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';

jest.mock('foursquarevenues');

it('renders without crashing', () => {
  shallow(<App />);
});

it('clicks start button and switches to search view', () => {
  const wrapper = mount(<App />);
  wrapper.setState({
    foursquareClientID: '123',
    foursquareClientSecretID: '456'
  });
  const startButton = wrapper.find('#startButton');
  expect(startButton.text()).toEqual('Start');
  startButton.simulate('click');
  expect(wrapper.state().searchMode).toEqual(true);

  const searchButton = wrapper.find('#searchButton');
  expect(searchButton.text()).toEqual('Search');

});

it('clicks search button and search for result with no params', () => {
  const wrapper = mount(<App />);
  wrapper.setState({
    searchMode: true,
    foursquareClientID: '123',
    foursquareClientSecretID: '456',
    location: 'Starbucks',
  });
  const searchButton = wrapper.find('#searchButton');
  expect(searchButton.text()).toEqual('Search');
  searchButton.simulate('click');
  expect(wrapper.state().venues).toBeNull();
});

it('clicks back button and switches to clientID input view', () => {
  const wrapper = mount(<App />);
  wrapper.setState({
    searchMode: true,
    foursquareClientID: '123',
    foursquareClientSecretID: '456'
  });
  const backButton = wrapper.find('#backButton');
  expect(backButton.text()).toEqual('Back');
  backButton.simulate('click');
  expect(wrapper.state().searchMode).toEqual(false);
  expect(wrapper.state().foursquareClientID).toEqual('');
  expect(wrapper.state().foursquareClientSecretID).toEqual('');
});

it('simulates location change events', () => {
  const wrapper = mount(<App />);
  wrapper.setState({
    searchMode: true
  });
  const name = 'Starbucks';
  wrapper.find('#locationArea').simulate('change', { target: { value: name } });

  expect(wrapper.state().location).toEqual(name);
});

it('simulates client ID input change events', () => {
  const wrapper = mount(<App />);
  const clientID = '123';
  wrapper.find('#clientID').simulate('change', { target: { value: clientID } });

  expect(wrapper.state().foursquareClientID).toEqual(clientID);
});

it('simulates client secret ID change events', () => {
  const wrapper = mount(<App />);
  const clientSecret = '456';
  wrapper.find('#clientSecretID').simulate('change', { target: { value: clientSecret } });

  expect(wrapper.state().foursquareClientSecretID).toEqual(clientSecret);
});

it('tests onPositionSuccess method', () => {
  const wrapper = shallow(<App />);
  const coords = {
    latitude: 45.6,
    longitude: -56.7
  }
  wrapper.instance().onPositionSuccess({ coords: coords });
  expect(wrapper.state().myCoords).toEqual(coords);
});

it('tests onPositionError method', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().onPositionError('Man-made Error');
  expect(wrapper.state().myCoords).toBeNull();
});

it('clicks get current location button', () => {
  const wrapper = mount(<App />);
  wrapper.setState({
    searchMode: true,
    foursquareClientID: '123',
    foursquareClientSecretID: '456',
  });
  const getLocationButton = wrapper.find('#getCurrentLocationButton');
  expect(getLocationButton.text()).toEqual('My Nearby Places of Interest');
  getLocationButton.simulate('click');
});


