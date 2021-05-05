const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  surname: String,
  post: String,
  email: String,
  number: Number
}, { strict: false });

module.exports =  mongoose.model('persons', userSchema);