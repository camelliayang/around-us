import React, { Component } from 'react';
import Place from './Place';
class ShowResult extends Component {

/**
 * For each place return a single place.
 * @param{Object} Place
 * @param{Integer} key
 * @return{Component}
 */
  eachPlace(place, i) {
    return (
      <Place placeName={place.venue.name} key={i}/>
    );
  }

  render() {
    return (
      <div >
        {this.props.venues.map(this.eachPlace)}
      </div>
    )
  }
}

export default ShowResult;