const {
  getAllDiscussions,
  getDiscussionsByCategory,
  getDiscussionById,
  addDiscussion,
  deleteDiscussion,
  addReply,
} = require('../helpers/discussionHelper');
const { checkAuth } = require('../helpers/jwtHelper');

const router = require('express').Router();

// get all discussions
router.get('/', async (req, res) => {
  try {
    let { category, page } = req.query;
    let discussions = [];

    // parse page to integer
    page = parseInt(page);

    if (category === 'all' || category === undefined) {
      discussions = await getAllDiscussions(page);
    } else {
      discussions = await getDiscussionsByCategory(category, page);
    }

    res.status(200).send(discussions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// get discussions by id
router.get('/:id', async (req, res) => {
  try {
    const discussion = await getDiscussionById(req.params.id);
    res.status(200).send(discussion);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// create new discussion
router.post('/', checkAuth, async (req, res) => {
  try {
    const newDiscussion = await addDiscussion({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).send(newDiscussion);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// delete discussion
router.delete('/:id', checkAuth, async (req, res) => {
  try {
    await deleteDiscussion(req.params.id);
    res.status(200).send(req.param.id);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// add reply to discussion
// @body: { text: string, discussionId: string }
router.post('/reply', checkAuth, async (req, res) => {
  try {
    const newReply = await addReply({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).send(newReply);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// get replies by discussion id
router.get('/:id/reply', async (req, res) => {
  try {
    const replies = await getRepliesByDiscussionId(req.params.id);
    res.status(200).send(replies);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
