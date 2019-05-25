const Video = require('../Models/VideoModel');
const { DefaultController } = require('./DefaultController');

class VideoController extends DefaultController {
  constructor() {
    super(Video);
  }

  getLatest(req, res) {
    const q = this.model.find({}).sort({'date': -1}).limit(parseInt(req.params.lim));
    q.exec((err, videos) => {
      if(err) return this.errorHandler.res_error(res, err);
      res.json({
        status: 'success',
        data: videos
      });
    });
  }
}

module.exports = {
  VideoController
};
