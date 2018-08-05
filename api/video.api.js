'use strict';
const streamVideo = require('../services/video.service').streamVideo;

function stream(req, res) {
    const videoName = req.params.videoName || 'videito.mp4';
    res.set('Content-Type', 'video/mp4');
    return streamVideo(videoName).pipe(res);
}

module.exports = {
  stream
};