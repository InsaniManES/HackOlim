const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = Language = mongoose.model('language', LanguageSchema);
