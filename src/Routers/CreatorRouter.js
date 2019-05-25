const router = require('express').Router();
const { CreatorController } = require('../Controllers/CreatorController');

const creatorController = new CreatorController();

router.route('/')
  .get((req, res) => creatorController.index(req, res))
  .post((req, res) => creatorController.create(req, res));

router.route('/:id')
  .get((req, res) => creatorController.view(req, res))
  .patch((req, res) => creatorController.update(req, res))
  .put((req, res) => creatorController.update(req, res))
  .delete((req, res) => creatorController.delete(req, res));

module.exports = router;