const { model, Schema } = require('mongoose');

const VideoSchema = new Schema({
  name: String,
  url: String,
  category: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  reviews: [
    {
      text: String,
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
});

const Video = model('Video', VideoSchema);
module.exports = Video;
