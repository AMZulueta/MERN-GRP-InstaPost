const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PostSchema = new Schema({
    description: {
        type: String,
    },
    image: {
        type: String
    },
}, {timestamps: true})

const Post = model('Post', PostSchema);

module.exports = Post;