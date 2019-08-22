const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get("/", (req, res) => {
  fs.readFile(
    path.join( __dirname, "../src/public/index.html"),
    (err, data) => {
      res.write(data);
      res.end();
    }
    );
  });
  
  router.get("/api", (req, res) => {
    let suggestions;
    const prefix = req.query.query;

    suggestions = `../src/public/json/amazon_api-${prefix}.json`
    fs.readFile(
      path.join( __dirname, suggestions),
      (err, data) => {
        if(err) {
          res.send(err);
          return;
        } 
        res.write(data);
        res.end();
    }
  );
});

module.exports = router;