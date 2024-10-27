const express = require('express');
const router = express.Router();
const VideoGame = require('../models/videoGameModel');

router.get('/', async (req, res) => {
    try {
        const videoGames = await VideoGame.find();
        res.json(videoGames);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { title, releaseDate, rating } = req.body;
    const videoGame = new VideoGame({ title, releaseDate, rating });

    try {
        const newVideoGame = await videoGame.save();
        res.status(201).json(newVideoGame);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;