const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  anime: {
    name: { type: String, required: true },
    image: { type: String, required: true },
    languages: { type: [String], required: true },
    episodes: { current: { type: Number }, total: { type: Number } },
    duration: { type: Number, required: true },
    videoUrl: { type: String, required: true }
  }
});

const Collection = mongoose.model('Collection', collectionSchema);
module.exports = Collection;
