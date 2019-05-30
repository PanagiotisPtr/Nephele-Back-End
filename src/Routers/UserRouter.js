const router = require('express').Router();
const { UserController } = require('../Controllers/UserController');

const userController = new UserController();

router.route('/')
  .get((req, res) => userController.index(req, res))
  .post((req, res) => userController.create(req, res));

router.route('/:id')
  .get((req, res) => userController.view(req, res))
  .patch((req, res) => userController.update(req, res))
  .put((req, res) => userController.update(req, res))
  .delete((req, res) => userController.delete(req, res));

router.route('/validate/:email/:password')
      .get((req, res) => userController.search(req, res));

module.exports = router;