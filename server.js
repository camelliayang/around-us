const express = require('express');
const foursquare = require('foursquarevenues');

const app = express();
app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/explore', (req, res) => {
    const params = req.query;

    foursquare(params.foursquareClientID, params.foursquareClientSecretID)
        .exploreVenues(params, (error, venues) => {
            if (!error) {
                res.json(venues.response.groups);
            } else {
                res.sendStatus(400);
            } 
        });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});