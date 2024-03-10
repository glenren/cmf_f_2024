const fs = require('fs');

const express = require('express');
const router = express.Router();

router.use(express.urlencoded());

router.get('/', function(request, response) {
    fs.readFile('./persistence/events.json', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }
        
        const events = JSON.parse(data);

        response.render('events', {events});

    });
});

module.exports = router;