// routes/adminRoutes.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Endpoint to add a user/admin
router.post('/add-user-admin', async (req, res) => {
  const { name, email, mobile, password, role } = req.body; // Include mobile

  try {
    const newUser = new User({ name, email, mobile, password, role }); // Save mobile
    await newUser.save();
    res.json({ message: `${role === 'admin' ? 'Admin' : 'User'} added successfully!` });
  } catch (err) {
    console.error('Error adding user/admin:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to get user details (name, email, role)
router.get('/dashboard-stats/users', async (req, res) => {
  try {
    const users = await User.find({ role: 'user' }, 'name email'); // Find users, return name and email
    res.json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to get admin details (name, email, role)
router.get('/dashboard-stats/admins', async (req, res) => {
  try {
    const admins = await User.find({ role: 'admin' }, 'name email'); // Find admins, return name and email
    res.json({ admins });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// routes/adminRoutes.js

// Endpoint to delete a user/admin by email
router.delete('/delete-user/:email', async (req, res) => {
  const { email } = req.params;

  try {
    // Find the user by email first
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User/Admin not found.' });
    }

    // Delete the user by email
    await User.findOneAndDelete({ email });

    // Send response based on the role of the user
    const roleMessage = user.role === 'admin' ? 'Admin deleted successfully!' : 'User deleted successfully!';
    res.status(200).json({ message: roleMessage });
  } catch (error) {
    console.error('Error deleting user/admin:', error);
    res.status(500).json({ error: 'Failed to delete user/admin.' });
  }
});

module.exports = router;
