const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        minLength: [3, 'Name must be at least 3 characters long.'],
        unique: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
}, {timestamps: true});

// ProfileSchema.plugin(uniqueValidator, {message: 'Name must be unique.'});

module.exports = mongoose.model('Profile', ProfileSchema);