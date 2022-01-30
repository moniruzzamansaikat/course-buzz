const { Schema, model } = require('mongoose');

const DiscussionSchema = new Schema(
  {
    text: String,
    category: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    replies: [
      {
        text: String,
        user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Discussion = model('Discussion', DiscussionSchema);
module.exports = Discussion;
