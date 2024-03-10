const fs = require('fs');

const express = require('express');
const router = express.Router();

router.use (express.urlencoded());

router.get('/', function(request, response) {
    response.render('query');
});

router.post('/submit', function (request, response) {
    console.log(request.body);

    var filterTags = request.body.filterTags.toLowerCase().split(", ");

    var events = [];

    fs.readFile('./persistence/events.json', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        const listOfEvents = JSON.parse(data);

        for (let i = 0; i < listOfEvents.length; i++) {
            if (filterTags.every(tag => listOfEvents[i].taglist.includes(tag))) {
                events.push(listOfEvents[i])
            }
        }
        response.render('events', {events});
    });
});

module.exports = router;