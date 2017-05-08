'use strict'

// Used for mocking foursuqare wrapper
const foursquarevenues = jest.genMockFromModule('foursquarevenues');

foursquarevenues.exploreVenues = function(param, func) {
  const groups = [
    {
      items: [
        {
          venue:
          {
            id: 22,
            name: 'National Park'
          }
        }
      ]
    }
  ];
  const mockResponse = {
    response: { groups: groups }
  };
  func(null, mockResponse);
}

module.exports = function(client_id, client_secret) {
  return {
    exploreVenues: foursquarevenues.exploreVenues
  };
};