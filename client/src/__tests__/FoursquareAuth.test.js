import React from 'react';
import { shallow } from 'enzyme';
import FoursquareAuth from '../components/FoursquareAuth';

it('renders without crashing', () => {
  shallow(<FoursquareAuth />);
});

it('simulates client ID change events', () => {
  const onInputClientID = jest.fn();
  const wrapper = shallow(
    <FoursquareAuth onInputID={onInputClientID} />
  );
  wrapper.find('#clientID').simulate('change');
  expect(onInputClientID).toHaveBeenCalledTimes(1);
});

it('simulates client Secret ID change events', () => {
  const onInputClientSecretID = jest.fn();
  const wrapper = shallow(
    <FoursquareAuth onInputSecretID={onInputClientSecretID} />
  );
  wrapper.find('#clientSecretID').simulate('change');
  expect(onInputClientSecretID).toHaveBeenCalledTimes(1);
});

it('simulates Start button click events', () => {
  const onButtonClick = jest.fn();
  const wrapper = shallow(
    <FoursquareAuth handleSuccess={onButtonClick} />
  );
  wrapper.find('#startButton').simulate('click');
  expect(onButtonClick).toHaveBeenCalledTimes(1);
});