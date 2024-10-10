const User = require('../models/User'); // Assuming you are using a User model

const registerUser = async (req, res) => {
  const { user_email, username, user_password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email: user_email });
    if (existingUser) {
      return res.status(400).json({ type: 2, message: 'Account already exists' });
    }

    // Create a new user
    const newUser = new User({
      email: user_email,
      username,
      password: user_password // Ideally, you should hash the password using bcrypt
    });

    await newUser.save();

    res.status(201).json({ result: { account_id: newUser._id } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  registerUser,
};
