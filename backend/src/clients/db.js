import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB: Connected'))
  .catch((err) => console.log('MongoDB connection error:', err.message));