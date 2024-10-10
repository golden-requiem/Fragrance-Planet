const express = require('express');
const bcrypt = require('bcrypt');
const userModel = require('../models/User');
const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    userModel.createUser(username, email, hashedPassword, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'Username or email already exists' });
        }
        return res.status(500).json({ message: 'Database error' });
      }
      res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login User
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  userModel.findUserByUsername(username, async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
    res.status(200).json({ message: 'Login successful', userId: user.id });
  });
});

module.exports = router;
