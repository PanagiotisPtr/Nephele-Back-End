const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
       status: 'API is working',
       message: 'Welcome to the Nephele API'
    });
});

const userController = require('./userController');

console.log(userController.index);

router.route('/users').get(userController.index).post(userController.new);

module.exports = router;