const UserContoller = require('../controllers/users.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.post('/api/register', UserContoller.create);
    app.get('/api/logout', UserContoller.logout);
    app.post('/api/login', UserContoller.findOne);
    app.get('/api/users', UserContoller.findAll)
    app.get('/api/user/:id', UserContoller.findOneId)
    app.put('/api/user/update/:id', UserContoller.update)
}