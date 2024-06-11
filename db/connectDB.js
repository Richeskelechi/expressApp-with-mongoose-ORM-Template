const mongoose = require('mongoose');
mongoose.set('strict', false); // Disable strict mode for queries
const connectDB = (url) => {
    return mongoose.connect(url);
}

module.exports = connectDB;
