const User = require('../model/User');

exports.loginUser = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      throw new Error('Incorrect password');
    }

    return user;
  } catch (error) {
    throw error;
  }
};

exports.createUser = async ({ name, email, password }) => {
  const user = new User({
    name,
    email,
    password,
  });

  if (!user.name || !user.email || !user.password) {
    throw new Error('Missing required fields');
  } else {
    try {
      await user.save();
      return user;
    } catch (error) {
      throw error;
    }
  }
};
