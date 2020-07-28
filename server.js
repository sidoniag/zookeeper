const express = require('express');
// instantiate server, tell it to listen for requests 
const app = express();
// make server listen
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });