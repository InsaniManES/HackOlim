const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  googleID: {
    type: String,
    unique: true
  },
  facebookID: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date
  },
  language: {
    type: String,
    required: true
  },
  signUp: {
    type: Date,
    default: Date.now
  },
  picturePath: {
    type: String,
    default: ''
  }
});

module.exports = User = mongoose.model('user', UserSchema);
