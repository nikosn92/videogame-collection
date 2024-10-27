require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

app.use(express.json());

const videoGamesRouter = require('./routes/videoGameRoutes');
app.use('/api/videogames', videoGamesRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
