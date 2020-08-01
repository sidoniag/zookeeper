const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals');
const express = require('express');

const PORT = process.env.PORT || 3001;

// initiate server
const app = express();

// middleware
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// GET route
app.get('/api/animals', (req, res) => {
  // res.send('Hello!');
  let results = animals;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

// param route must come after other GET route
app.get('/api/animals/:id', (req, res) => {
  const result = findById(req.params.id, animals);
  if (result) {
  res.json(result);
} else {
  res.send(404);
}
});

// POST route
app.post('/api/animals', (req, res) => {
  // req.body is where our incoming content will be
  // set id based on what the next index of the array will be
  req.body.id = animals.length.toString();

  // if any data in req.body is incorrect, send 400 error back
  if (!validateAnimal(req.body)) {
    res.status(400).send('The animal is not properly formatted.');
  } else {
  // add animal to json file and animals array in this function
  const animal = createNewAnimal(req.body, animals);
  res.json(req.body);
  }
});

// connect index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// connect animals.html file
app.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, './public/animals.html'));
});

// connect zookeepers.html file
app.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, './public/zookeepers.html'));
});

// make server listen
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});