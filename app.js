require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { checkAuth } = require('./helpers/jwtHelper');
const path = require('path');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: '*',
}));

// dev dependencies 
if (process.env.NODE_ENV === 'development') {
  app.use(require('morgan')('dev'));
}

// routes
const authRoutes = require('./routes/auth');
const coursesRoutes = require('./routes/videos');
const discussionRoutes = require('./routes/discussion');

app.use('/api/auth', authRoutes);
app.use('/api/videos', checkAuth, coursesRoutes);
app.use('/api/discuss', discussionRoutes);

// server frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  require('./db');

  if ('development' === process.env.NODE_ENV) {
    console.log(`Listening on port ${PORT}`);
  }
});
