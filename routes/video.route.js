'use strict';

var express = require('express');
var router = express.Router({});

var video = require('../api/video.api');

router.get('/', video.stream);


module.exports = router;