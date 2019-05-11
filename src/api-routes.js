const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
     status: 'API is working',
     message: 'Welcome to the Nephele API'
  });
});

const userController = require('./Controllers/userController');

router.route('/users')
  .get(userController.index)
  .post(userController.create);

router.route('/users/:user_id')
  .get(userController.view)
  .patch(userController.update)
  .put(userController.update)
  .delete(userController.delete);

module.exports = router;