const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MongoURI');

// connect to database

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true
    });
    console.log('mongodb connected...');
  } catch (error) {
    console.log(' mongodb not connected');
    process.exit(1);
  }
};
module.exports = connectDB;
