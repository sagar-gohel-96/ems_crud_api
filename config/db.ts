const mongoose = require('mongoose');
const connectDB = async () => {
  const connect = await mongoose.connect(
    'mongodb+srv://sagar:sagar1101g@cluster0.j61sot1.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
module.exports = connectDB;

