const mongoose = require('mongoose');

/**Create User schema */
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    maxLength: 20,
    trim: true,
  },
  password: { type: String, required: true },
  emailId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  age: {
    type: Number,
    min: 10,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    message: `enum validation failed for the path {PATH} with value {VALUE}`,
  },
  about: {
    type: String,
    maxLength: 1000,
    default: 'This is default value of about user!',
  },
  photoUrl: {
    type: String,
  },
  skills: {
    type: [String],
  },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
