const jwt = require('jsonwebtoken');

exports.signToken = (object) => {
  try {
    const token = jwt.sign(object, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

// check auth
exports.checkAuth = (req, res, next) => {
  try {
    // if not token in header
    if (!req.headers.authorization) {
      throw new Error('No token in header');
    }

    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (error) {
    let { message } = error;

    if (error.name === 'TokenExpiredError') {
      message = 'Your login session has expired. Please login again.';
    }

    res.status(401).json({
      user: null,
      message,
    });
  }
};
