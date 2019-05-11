const User = require('./userModel');

const error_handler = (res, error) => {
  return res.json({
          status: 'error',
          message: error
        });
}

// Get all users
exports.index = (_, res) => {
  User.get((err, users) => {
    if(err) return error_handler(res, err);
    res.json({
      status: 'success',
      message: 'Users retrieved successfully',
      data: users
    });
  });
}

// View single User
exports.view = (req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    if(err) return error_handler(res, err);
    res.json({
      message: 'User details',
      data: user
    });
  });
}

// Create new user
exports.create = (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }, (err, user) => {
    if(err) return error_handler(res, err);
    res.json({
      message: 'New user created!',
      data: user
    });
  });
}

// Update user information
exports.update = (req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    if(err) return error_handler(res, err);
    user.username = req.body.username ? req.body.username : user.username;
    user.password = req.body.password ? req.body.password : user.password;
    user.email = req.body.email ? req.body.email : user.email;

    user.save(err => {
      if(err) return error_handler(res, err);
      res.json({
        message: 'User info updated',
        data: user
      });
    });
  });
}

// Delete user
exports.delete = (req, res) => {
  User.remove({_id: req.params.user_id}, (err, _) => {
    if(err) return error_handler(res, err);
    res.json({
      status: 'success',
      message: 'User deleted'
    });
  });
}
