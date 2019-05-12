const Video = require('../Models/VideoModel');
const { DefaultController } = require('./DefaultController');

class VideoController extends DefaultController {
  constructor() {
    super(Video);
  }
}

module.exports = {
  VideoController
};
