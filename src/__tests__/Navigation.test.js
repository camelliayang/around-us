import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../components/Navigation';

it('renders without crashing', () => {
  shallow(<Navigation />);
});

it('simulates location change events', () => {
  const onLocationChange = jest.fn();
  const wrapper = shallow(
    <Navigation onChangeLocation={onLocationChange} />
  );
  wrapper.find('#locationArea').simulate('change');
  expect(onLocationChange).toHaveBeenCalledTimes(1);
});

it('simulates back button click events', () => {
  const onButtonClick = jest.fn();
  const wrapper = shallow(
    <Navigation onClickBack={onButtonClick} />
  );
  wrapper.find('#backButton').simulate('click');
  expect(onButtonClick).toHaveBeenCalledTimes(1);
});

it('simulates search button click events', () => {
  const onButtonClick = jest.fn();
  const wrapper = shallow(
    <Navigation onClickSearch={onButtonClick} />
  );
  wrapper.find('#searchButton').simulate('click');
  expect(onButtonClick).toHaveBeenCalledTimes(1);
});

