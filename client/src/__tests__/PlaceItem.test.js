import React from 'react';
import { shallow } from 'enzyme'
import PlaceItem from '../components/PlaceItem';

it('renders without crashing', () => {
  shallow(<PlaceItem />);
});

it('returns the correct place name', () => {
  const name = 'Starbucks';
  const wrapper = shallow(<PlaceItem placeName={name}/>);
  expect(wrapper.contains(name)).toEqual(true);
});