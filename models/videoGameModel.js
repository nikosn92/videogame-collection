const mongoose = require('mongoose');

const videoGameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    rating: { type: Number, required: true, min: 0, max: 10 },
});

module.exports = mongoose.model('VideoGame', videoGameSchema);
