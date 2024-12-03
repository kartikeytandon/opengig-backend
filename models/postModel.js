const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', default: null },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;