'use strict';

const express = require('express');
const router = express.Router({});
const index = require('../api/index.api');

router.get('/', index);

module.exports = router;