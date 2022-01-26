const {
  getAllVideos,
  createVideo,
  getVideosByUserId,
  deleteVideo,
  addReviewById,
  getReviewsById,
} = require('../helpers/videosHelper');
const User = require('../model/User');
const router = require('express').Router();

// get all videos
router.get('/', async (req, res) => {
  try {
    const videos = await getAllVideos();
    res.status(200).send(videos);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// add video
router.post('/', async (req, res) => {
  try {
    const video = await createVideo({ ...req.body, userId: req.user._id });
    res.status(201).send(video);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// get video by userId
router.get('/user/:id', async (req, res) => {
  try {
    const videos = await getVideosByUserId(req.params.id);
    res.status(200).send(videos);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// delete video by id
router.delete('/:id', async (req, res) => {
  try {
    const video = await deleteVideo(req.params.id);
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// add review
router.post('/:id/reviews', async (req, res) => {
  try {
    // add review
    await addReviewById(req.params.id, {
      text: req.body.text,
      user: req.user._id,
    });

    // find user by id
    const user = await User.findById(req.user._id).lean();

    res.status(201).send({
      name: user.name,
      text: req.body.text,
      videoId: req.params.id,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// get all reviews
router.get('/:id/reviews', async (req, res) => {
  try {
    const reviews = await getReviewsById(req.params.id);
    res.status(200).send(reviews);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
