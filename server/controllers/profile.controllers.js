const Profile = require('../models/profile.models');

module.exports = ({
    // CREATE (POST)
        createProfile: (req, res) => {
            Profile.create(req.body)
                .then((newProfile) => res.json(newProfile))
                .catch((err) => res.status(400).json(err))
        }, 
    // READ (GET)
        findAllProfile: (req, res) => {
            Profile.find(req.body)
                .then((allProfile) => res.json(allProfile))
                .catch((err) => res.status(400).json({message: "Something went wrong druing find", error: err}))
        }, 
        findOneProfile: (req, res) => {
            Profile.findById(req.params.id)
                .then((oneProfile) => res.json(oneProfile))
                .catch((err) => res.status(400).json({message: "Something went wrong during find", error: err}))
        }, 
    // UPDATE(PUT)
        updateProfile: (req, res) => {
            Profile.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
                .then((updatedProfile) => res.json(updatedProfile))
                .catch((err) => res.status(400).json(err))
        }, 
    // DELETE (DELETE)
        deleteProfile: (req, res) => {
            Profile.findByIdAndDelete(req.params.id)
                .then((deletedProfile) => res.json({message: "Successfully deleted Profile", pokemon: deletedProfile}))
                .catch((err) => res.status(400).json({message: "Something went wrong during delete", error: err}))
        }
    });