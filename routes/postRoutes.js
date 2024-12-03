const express = require('express');
const {
  createPost,
  getRootPosts,
  getComments,
  likeDislikePost,
  editPost,
  deletePost,
} = require('../controllers/postController');

const router = express.Router();

router.post('/', createPost); 
router.get('/', getRootPosts); 
router.get('/:postId/comments', getComments); 
router.post('/:postId/like-dislike', likeDislikePost); 
router.put('/:postId', editPost); 
router.delete('/:postId', deletePost); 

module.exports = router;