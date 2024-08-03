const Post = require('../models/post.models');

module.exports = ({
    // CREATE (POST)
            createPost: (req, res) => { 
            Post.create(req.body, {new: true, runValidators: true})
                .then((newPost) => res.json(newPost))
                .catch((err) => res.status(400).json(err))
        },
        findAllPost: (req, res) => {
            Post.find()
                .then((allPost) => res.json(allPost))
                .catch((err) => res.status(400).json({message: "Something went wrong during find", error: err}))
        },
        findOnePost: (req, res) => {
            Post.findById(req.params.id)
                .then((onePost) => res.json(onePost))
                .catch((err) => res.status(400).json({message: "Something went wrong during find", error: err}))
        },
        updatePost: (req, res) => {
            Post.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
                .then((updatedPost) => res.json(updatedPost))
                .catch((err) => res.status(400).json(err))
        }, 
        deletePost: (req, res) => {
            Post.findByIdAndDelete(req.params.id)
                .then((deletedPost) => res.json({message: "Successfully deleted the Product", title: deletedPost}))
                .catch((err) => res.status(400).json({message: "Something went wrong during delete", error: err}))

        },
        findAllPostUser: (req, res) => {
            Post.find({userId: req.params.id})
                .then((allPost) => res.json(allPost))
                .catch((err) => res.status(400).json({message: "Something went wrong during find", error: err}))
        },

    });