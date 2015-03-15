var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res) {
  res.render('index', {title: 'Little Rex'});
});

/* GET data.json */
router.get('/achievements', function(req, res) {
    res.send(require('../data/achievements.json'))
});

module.exports = router;
