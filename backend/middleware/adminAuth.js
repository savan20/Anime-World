// middleware/adminAuth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const adminAuth = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from headers

  if (!token) {
    return res.status(401).json({ message: 'No token provided. Access denied.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    const user = await User.findById(decoded.userId); // Get user by decoded token userId

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' }); // Deny access if not admin
    }

    req.user = user; // Attach user info to the request object
    next(); // Pass to the next middleware or controller
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token.' }); // Handle error or expired token
  }
};

module.exports = adminAuth;
