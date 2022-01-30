const Discussion = require('../model/Discussion');

// get all discussions
exports.getAllDiscussions = async () => {
  try {
    const discussions = await Discussion.find({}).populate('user').populate({
      path: 'replies',
      select: 'text user.name',
    });
    return discussions;
  } catch (error) {
    throw error;
  }
};

// get discussion by id
exports.getDiscussionById = async (discussionId) => {
  try {
    const discussion = await Discussion.findById(discussionId)
      .populate({
        path: 'user',
        select: 'name ',
      })
      .populate({
        path: 'replies.user',
        select: 'name',
      });
    return discussion;
  } catch (error) {
    throw error;
  }
};

// get discussions by category
exports.getDiscussionsByCategory = async (category) => {
  try {
    const discussions = await Discussion.find({ category })
      .populate('user')
      .populate({
        path: 'replies',
        select: 'text user.name',
      });

    return discussions;
  } catch (error) {
    throw error;
  }
};

// add new discussion
exports.addDiscussion = async (discussion) => {
  try {
    const newDiscussion = await Discussion.create(discussion);
    return newDiscussion;
  } catch (error) {
    throw error;
  }
};

// delete discussion
exports.deleteDiscussion = async (discussionId) => {
  try {
    const discussion = await Discussion.findById(discussionId);
    if (!discussion) {
      throw new Error('Discussion not found');
    }

    return await discussion.remove();
  } catch (error) {
    throw error;
  }
};

// add new reply
exports.addReply = async (reply) => {
  try {
    const newReply = await Discussion.findByIdAndUpdate(
      reply.discussionId,
      { $push: { replies: reply } },
      { new: true }
    )
      .populate({
        path: 'replies.user',
        select: 'text name',
      })
      .populate({
        path: 'user',
        select: 'name',
      });

    return newReply;
  } catch (error) {
    throw error;
  }
};

// get replies by discussion id
exports.getRepliesByDiscussionId = async (discussionId) => {
  try {
    const replies = await Discussion.findById(discussionId)
      .populate({
        path: 'user',
      })
      .populate({
        path: 'replies.user',
        select: 'text user.name',
      });

    return replies.replies;
  } catch (error) {
    throw error;
  }
};
