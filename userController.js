const User = require('./userModel');

// indexing 
exports.index = (_, res) => {
    User.find({}, {_id: 0, username: 1, password: 1, email: 1},(err, users) => {
        if(err)
            return res.json({
                status: 'error',
                message: err
            });
        res.json({
            status: 'success',
            message: 'Users retrieved successfully',
            data: users
        });
    });
}

// new user
exports.new = (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }, (err, user) => {
        if (err) return res.json(err);
        res.json({
            message: 'New user created!',
            data: user
        });
    });
}