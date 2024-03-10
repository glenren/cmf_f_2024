var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { pageTitle: "Page Title", appName: "app Name", communityLevel: 10 });
});
router.get('/list', function(req, res, next) {
  res.render('list', { pageTitle: 'Express' });
});
router.get('/events/:eventId', function(req, res, next) {
  res.render('event', { pageTitle: 'Express' });
});

module.exports = router;
