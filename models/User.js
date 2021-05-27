const mongoose = require('mongoose');
const { Schema } = mongoose;
// The above line is shortcut for ->  const Schema  = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model('users', userSchema);
