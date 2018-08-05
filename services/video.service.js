'use strict';
const path = require('path');
const fs = require('fs');


function streamVideo (videoName) {
    console.log(__dirname + '/' + videoName);
    return fs.createReadStream(path.resolve(videoName));
}


module.exports = {
    streamVideo
};