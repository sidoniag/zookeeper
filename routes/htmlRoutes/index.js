const path = require('path');
const router = require('express').Router();

// connect index.html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
  
  // connect animals.html file
  router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, './public/animals.html'));
  });
  
  // connect zookeepers.html file
  router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, './public/zookeepers.html'));
  });

  module.exports = router;