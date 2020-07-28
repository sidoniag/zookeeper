const express = require('express');
// instantiate server, tell it to listen for requests 
const app = express();
// add the route
app.get('/api/animals', (req, res) => {
  res.json(animals);
});
// make server listen
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
// front-end request for data
const { animals } = require('./data/animals');