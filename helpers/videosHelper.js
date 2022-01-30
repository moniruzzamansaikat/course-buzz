const {
  Types: { ObjectId },
} = require('mongoose');
const Video = require('../model/Video');

// todo: test
exports.getAllVideos = async () => {
  try {
    return await Video.find().populate({
      path: 'user',
      select: "name",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

// todo: test
exports.getVideosByUserId = async (userId) => {
  try {
    const vidoes = await Video.find({ user: new ObjectId(userId) });
    return vidoes;
  } catch (error) {
    throw new Error(error.message);
  }
};

// todo: test
exports.createVideo = async ({ name, url, category, userId }) => {
  // find by url
  const foundVideo = await Video.findOne({ url });
  if (foundVideo) {
    throw new Error('Video already exists');
  }

  const video = new Video({
    name,
    url,
    category,
    user: userId,
  });
  return await video.save();
};

// todo: test
exports.deleteVideo = async (id) => {
  try {
    const foundVideo = await Video.findById(ObjectId(id));
    if (!foundVideo) {
      throw new Error('Video not found');
    }

    return await Video.findByIdAndDelete(id);
  } catch (error) {
    const { message } = error;
    throw new Error(message);
  }
};

// todo: test
exports.addReviewById = async (id, review) => {
  try {
    const foundVideo = await Video.findById(ObjectId(id));
    if (!foundVideo) {
      throw new Error('Video not found');
    }

    foundVideo.reviews.push(review);
    return await foundVideo.save();
  } catch (error) {
    const { message } = error;
    throw new Error(message);
  }
};

// todo: test
exports.getReviewsById = async (id) => {
  try {
    const foundVideo = await Video.findById(ObjectId(id)).populate({
      path: 'reviews.user',
      select: 'name',
    });
    if (!foundVideo) {
      throw new Error('Video not found');
    }

    return foundVideo.reviews;
  } catch (error) {
    const { message } = error;
    throw new Error(message);
  }
};
