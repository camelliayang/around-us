import React from 'react';
import { shallow, mount } from 'enzyme';
import ResultList from '../components/ResultList';

it('renders without crashing', () => {
  shallow(<ResultList />);
});

it('tests result list with 2 venues', () => {
  const venuesList = [
    { venue: 
      { name: "Starbucks" }
    }, 
    { venue: 
      { name: "Bagels" }
    }
  ];
  const wrapper = mount(
    <ResultList venues={venuesList} />
  );
  expect(wrapper.find('div')).toHaveLength(1);
  expect(wrapper.find('PlaceItem')).toHaveLength(2);
});
