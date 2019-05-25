const mongoose = require('mongoose');

const creatorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  subscribers: {
    type: Number,
    required: true,
    default: 0,
    validate : {
      validator : Number.isInteger,
      message   : '{VALUE} is not an integer value'
    }
  },
  user: {
    type: String,
    required: true,
    unique: true
  }
});

const Creator = module.exports = mongoose.model('Creator', creatorSchema);

module.exports.get = (callback, limit) => {
  Creator.find(callback).limit(limit);
}