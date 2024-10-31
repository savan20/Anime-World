// models/Anime.js
const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  languages: {
    type: [String], // Array of languages
    required: true,
  },
  episodes: {
    current: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  duration: {
    type: Number,
    required: true,
  },
  videoUrl: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Anime', AnimeSchema);
