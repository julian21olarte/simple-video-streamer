'use strict';

module.exports = function index(req, res) {
    return res.status(200).sendFile('index.html');
};