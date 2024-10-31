const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

// Define the User schema.
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // User's mobile number
    mobile: {
      type: String,
      required: true,
    },
    // User's email address
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // User's hashed password
    password: {
      type: String,
      required: true,
    },
    // Role to differentiate between 'user' and 'admin'
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user', // Default role is 'user'
    },
  //   // List of anime added by the user
  //   animeList: [
  //     {
  //       name: String,
  //       image: String,
  //       languages: [String],
  //       episodes: {
  //         current: Number,
  //         total: Number,
  //       },
  //       duration: Number,
  //       videoUrl: String,
  //     },
  //   ],
    },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Compare password for login
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
