const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DB', { useNewUrlParser: true })
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.error('Error connecting to DB:', err));

module.exports

