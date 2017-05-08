import React, { Component } from 'react';
import PlaceItem from './PlaceItem';

class ResultList extends Component {

/**
 * For each place return a single place.
 * @param{Object} PlaceItem
 * @param{Integer} key
 * @return{Component}
 */
  eachPlace(place, i) {
    return (
      <PlaceItem placeName={place.venue.name} key={i}/>
    );
  }

  render() {
    return (
      <div >
        {this.props.venues && this.props.venues.map(this.eachPlace)}
      </div>
    )
  }
}

export default ResultList;