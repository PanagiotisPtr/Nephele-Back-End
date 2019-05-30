const User = require('../Models/UserModel');
const { DefaultController } = require('./DefaultController');

class UserController extends DefaultController {
  constructor() {
    super(User);
  }

  
  search(req, res) {
    this.model.find({email: req.params.email,
                     password: req.params.password},
                     (err, docs) => {
      if(err) return this.errorHandler.res_error(docs, err);
      res.json({
        status: 'success',
        data: docs
      });
    });
  }
}

module.exports = {
  UserController
};
