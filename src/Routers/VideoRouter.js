const router = require('express').Router();
const { VideoController } = require('../Controllers/VideoController');

const videoController = new VideoController();

router.route('/')
  .get((req, res) => videoController.index(req, res))
  .post((req, res) => videoController.create(req, res));

router.route('/:id')
  .get((req, res) => videoController.view(req, res))
  .patch((req, res) => videoController.update(req, res))
  .put((req, res) => videoController.update(req, res))
  .delete((req, res) => videoController.delete(req, res));

router.route('/latest/:lim')
  .get((req, res) => videoController.getLatest(req, res));

module.exports = router;