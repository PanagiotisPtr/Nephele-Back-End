const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
  title: {
    type: String,
    requried: true
  },
  description: String,
  creator: {
    type: String,
    requried: true
  },
  comments: [Object], // format {user: String, comment: String} -- need to add validator
  likes: {
    type: Number,
    required: true,
    default: 0,
    validate : {
      validator : Number.isInteger,
      message   : '{VALUE} is not an integer value'
    }
  },
  dislikes: {
    type: Number,
    required: true,
    default: 0,
    validate : {
      validator : Number.isInteger,
      message   : '{VALUE} is not an integer value'
    }
  },
  views: {
    type: Number,
    required: true,
    default: 0,
    validate : {
      validator : Number.isInteger,
      message   : '{VALUE} is not an integer value'
    }
  },
  watch_time: {
    type: Number,
    required: true
  },
  shares: {
    type: Number,
    required: true,
    default: 0,
    validate : {
      validator : Number.isInteger,
      message   : '{VALUE} is not an integer value'
    }
  },
  date: {
    type: Date,
    required: true
  },
  tags: [String]
});

const Video = module.exports = mongoose.model('Video', videoSchema);

module.exports.get = (callback, limit) => {
  Video.find(callback).limit(limit);
}