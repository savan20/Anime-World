require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const animeRoutes = require('./routes/animeRoutes');
const adminRoutes = require('./routes/adminRoutes');
const collectionRoutes = require('./routes/collectionRoutes'); 

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/animedatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/anime', animeRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/collection', collectionRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
