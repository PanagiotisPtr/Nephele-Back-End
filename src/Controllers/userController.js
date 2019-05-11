const User = require('../Models/UserModel');
const { DefaultController } = require('./DefaultController');

class UserController extends DefaultController {
  constructor() {
    super(User);
  }
}

module.exports = {
  UserController
};