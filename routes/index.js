var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

router.get('/', (req, res, next) => {
    res.send('MediCenter API Home!');
});

router.get('/api', (req, res, next) => {
    res.json("API Working!!");
});


module.exports = router;