const db = require('../../database/db');

module.exports = {
  createUser: (username, email, password, callback) => {
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], callback);
  },

  findUserByUsername: (username, callback) => {
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], callback);
  }
};
