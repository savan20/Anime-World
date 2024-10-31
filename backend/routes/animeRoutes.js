// routes/animeRoutes.js
const express = require('express');
const Anime = require('../models/Anime'); // Import the Anime model
const router = express.Router();

// POST route to add anime
router.post('/add-anime', async (req, res) => {
  try {
    const { name, image, languages, episodes, duration, videoUrl } = req.body;

    // Create new anime document
    const newAnime = new Anime({
      name,
      image,
      languages: languages.split(',').map(lang => lang.trim()), // Convert to array
      episodes,
      duration,
      videoUrl,
    });

    // Save to database
    const savedAnime = await newAnime.save();
    res.status(201).json(savedAnime);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add anime', error });
  }
});

// Route to get all anime
router.get('/', async (req, res) => {
  try {
    const animeList = await Anime.find();
    res.status(200).json(animeList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch anime list' });
  }
});

// GET route to get anime by name
router.get('/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const anime = await Anime.findOne({ name }); // Find anime by name

    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }

    res.status(200).json(anime);
  } catch (error) {
    console.error('Error fetching anime:', error);
    res.status(500).json({ message: 'Failed to fetch anime', error });
  }
});


// Update anime
router.put('/edit/:name', async (req, res) => {
  const { name } = req.params;
  const { image, languages, episodes, duration, videoUrl } = req.body;
  
  try {
      const updatedAnime = await Anime.findOneAndUpdate(
          { name },
          { image, languages, episodes, duration, videoUrl },
          { new: true, runValidators: true }
      );
      if (!updatedAnime) {
          return res.status(404).json({ message: 'Anime not found!' });
      }
      res.json(updatedAnime);
  } catch (error) {
      console.error('Error updating anime:', error);
      res.status(500).send('Internal Server Error');
  }
});

// DELETE route to delete anime by name
router.delete('/delete/:name', async (req, res) => {
  try {
    const { name } = req.params;

    // Find and delete the anime by name
    const deletedAnime = await Anime.findOneAndDelete({ name });

    if (!deletedAnime) {
      return res.status(404).json({ message: 'Anime not found' });
    }

    res.status(200).json({ message: 'Anime deleted successfully' });
  } catch (error) {
    console.error('Error deleting anime:', error);
    res.status(500).json({ message: 'Failed to delete anime', error });
  }
});

module.exports = router;
