const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

app.use(express.json());
app.use('/acct', userRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
