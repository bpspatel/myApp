var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  user_first_name: String,
  user_last_name: String,
  user_email: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
