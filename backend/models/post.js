const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  addedBy: { type: String, required: false },
  fact: { type: String, required: true },
});

module.exports = mongoose.model('Post', postSchema);
// Post.X
