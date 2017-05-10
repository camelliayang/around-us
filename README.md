# Around Us

This is a web application that shows nearby places of interest.

## Technologies

1. Using React to build client app.
2. Using Node.js for the server.
3. Using Jest for testing.
4. Using Foursquare API.
5. Using foursquarevenues to get venues.
6. Using Create React App to get the raw application.

## Requirement
Node >= 6 installed

## Runnying locally

```
npm i
cd client
npm i
cd ..
npm start
```

## Running the tests

```
cd client
npm test
```

Check the coverage by:
```
cd client
npm test -- --coverage
```
## How to use the application
1. Input your Foursquare client ID and client secret ID
2. Click "Start"
3. Input your location or get your current location:
  1) Input your location by zipcode or place name - > click "Search".
  2) Input your location by getting your current location. The browser will ask you to allow it to get your location. Wait for 3-7  seconds.
4. You can see your location list.
  


## To do list

1. Beautify the application. Right now don't have enough time to work on it. Will fix it in next version.

2. Get current location needs to wait for several seconds to show the result list now. So the user should be told to wait and the button should be disabled until we get the venues result. And if we got nothing, we need to tell the user. User experience here needs to be improved.

3. Designed to show 30 places everytime. Can make the results larger in the future.

4. Public it 



