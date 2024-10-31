const express = require('express');
const router = express.Router();
const Collection = require('../models/Collection');

// Add anime to user's collection
router.post('/add-to-collection', async (req, res) => {
  const { userId, anime } = req.body;

  try {
    const newAnime = new Collection({
      userId,
      anime
    });

    await newAnime.save();
    res.status(201).json({ message: 'Anime added to collection!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add anime to collection' });
  }
});

// Get user's collection
router.get('/get-collection/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const collection = await Collection.find({ userId });
    res.json(collection);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve collection' });
  }
});

module.exports = router;
