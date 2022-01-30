const { createUser, loginUser } = require('../helpers/authHelpers');
const { signToken, checkAuth } = require('../helpers/jwtHelper');

const router = require('express').Router();

// post request to /api/auth/login
router.post('/login', async (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    try {
      const user = await loginUser(req.body);
      const token = signToken({
        _id: user._id,
        name: user.name,
      });
      res.send({ user, token });
    } catch (error) {
      const { message } = error;
      res.status(401).send(message);
    }
  }
});

// post register request to /api/auth/register
router.post('/register', async (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    try {
      const user = await createUser(req.body);

      const token = signToken({
        _id: user._id,
        name: user.name,
      });
      res.json({ user, token });
    } catch (error) {
      const { message } = error;
      return res.status(400).send(message);
    }
  }
});

// check login status
router.post('/status', checkAuth, (req, res) => {
  if (req.user) {
    res.json({
      user: req.user,
    });
  } else {
    res.status(401).send('You are not logged in');
  }
});

module.exports = router;
