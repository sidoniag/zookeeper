const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals');
const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

// initiate server
const app = express();

// middleware
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// make server listen
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});