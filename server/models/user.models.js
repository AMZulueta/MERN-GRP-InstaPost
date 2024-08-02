const mongoose = require('mongoose');
// const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        // required: [true, "Pet name is required"],
        // minLength: [3, "Pet name must be at least 3 characters long."],
        // unique: true
    },

    lname: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    },
    avatar: {
        type: String
    },
    about: {
        type: String
    }

}, {timestamps: true})

// UserSchema.plugin(uniqueValidator, {message: " name must be unique."});

module.exports = mongoose.model ('User', UserSchema);
