const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  id: { type: Number, default: 0, required: true },
  name: { type: String, required: true, default: '' },
  email: { type: String, required: true, default: '' },
  passwordHash: { type: String, required: true, default: '' },
});

exports.User = mongoose.model('User', userSchema);
