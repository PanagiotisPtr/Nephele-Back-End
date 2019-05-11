const mongoose = require('mongoose');

const creatorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribers: {
    type: Number,
    required: true,
    default: 0
  }
});

const Creator = module.exports = mongoose.model('Creator', creatorSchema);

module.exports.get = (callback, limit) => {
  Creator.find(callback).limit(limit);
}