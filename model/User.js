const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserScema = new Schema({
  name: String,
  password: String,
  email: String,
});

// hash passwrd
UserScema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
});

// compare password
UserScema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('User', UserScema);
module.exports = User;
