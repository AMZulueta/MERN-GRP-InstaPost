const PostController = require('../controllers/posts.controllers');
const {authenticate} = require("../config/jwt.config");

module.exports = app => {
    app.post('/api/post', PostController.createPost);
    app.get('/api/post', PostController.findAllPost);
    app.get('/api/post/:id', PostController.findOnePost);
    app.put('/api/update/post/:id', PostController.updatePost);
    app.delete('/api/post/:id', PostController.deletePost);
};