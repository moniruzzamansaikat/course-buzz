const { Schema, model } = require('mongoose');
const pagination = require('mongoose-paginate-v2')

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
        ceratedAt: {
          type: Date,
          default: Date.now,
        }
      },
    ],
  },
  {
    timestamps: true,
  }
);

DiscussionSchema.plugin(pagination);

const Discussion = model('Discussion', DiscussionSchema);
module.exports = Discussion;
