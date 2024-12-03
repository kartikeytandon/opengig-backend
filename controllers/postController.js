const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
  const { content, parent } = req.body;
  try {
    const post = await Post.create({ content, parent });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRootPosts = async (req, res) => {
  const { page = 1, limit = 10, sort = 'timestamp' } = req.query;
  try {
    const posts = await Post.find({ parent: null })
      .sort({ [sort]: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.status(200).json(posts);
  } catch (error) { 
    res.status(500).json({ message: error.message });
  }
};

exports.getComments = async (req, res) => {
  const { postId } = req.params;
  const { page = 1, limit = 5 } = req.query;
  try {
    const comments = await Post.find({ parent: postId })
      .sort({ timestamp: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.likeDislikePost = async (req, res) => {
  const { postId } = req.params;
  const { action } = req.body; 
  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (action === 'like') {
      post.likes = (post.likes || 0) + 1;
    } else if (action === 'dislike') {
      post.dislikes = (post.dislikes || 0) + 1;
    } else {
      return res.status(400).json({ message: 'Invalid action' });
    }

    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.editPost = async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;
  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    post.content = content;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    await post.deleteOne();
    res.status(200).json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};