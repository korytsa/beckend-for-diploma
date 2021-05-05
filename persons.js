const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
});

const User = mongoose.model('persons', userSchema);

module.exports = User;
