const express = require('express');
const app = express();
const connectDB = require('./config/db');

//init middlware
app.use(express.json({ extended: false }));
// connect to database
connectDB();

//get api routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));

//create  server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
