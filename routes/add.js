const fs = require('fs');

const express = require('express');
const router = express.Router();

router.use (express.urlencoded());

router.get('/', function(request, response) {
    response.render ('add');
});

router.post('/submit', function (request, response) {
    console.log(request.body);

    const taglist = request.body.eventTags.toLowerCase().split(", ").sort();

    const newEvent = {name: request.body.eventName, startDate: request.body.startDate, startTime: request.body.startTime,
        endDate: request.body.endDate, endTime: request.body.endTime, type: request.body.eventType,
        desc: request.body.eventDesc, tags: taglist.join(', '), taglist: taglist};

    fs.readFile('./persistence/events.json', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }
        
        const events = JSON.parse(data);

        events.push(newEvent);

        fs.writeFile('./persistence/events.json', JSON.stringify(events, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }
            console.log('Event added successfully.');
            // maybe smth here sending to a "Event has been added successfully" page or popup on the gui side idk
        });
    });

    response.render('submitted');
});

module.exports = router;