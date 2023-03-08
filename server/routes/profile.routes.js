const ProfileController = require('../controllers/profile.controllers');
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.post('/api/profile', ProfileController.createProfile);
    app.get('/api/profile', authenticate, ProfileController.findAllProfile);
    app.get('/api/profile/:id', ProfileController.findOneProfile);
    app.put('/app/profile/:id', ProfileController.updateProfile);
    app.delete('/api/pokemon/:id', ProfileController.deleteProfile);
};