const mongoose = require('mongoose');

/**Function to connect to the database */
const connectToDb = async () => {
  await mongoose.connect(process.env.DB_URI);
};

module.exports = connectToDb;