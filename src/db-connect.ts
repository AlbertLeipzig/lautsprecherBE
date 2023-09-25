import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

export const connectToDb = () => {
  const dbUri = process.env.DB_URI;

  if (!dbUri) {
    throw new Error('DB_URI environment variable is not defined.');
  }
  return new Promise((resolve, reject) => {
    mongoose
      .connect(dbUri)
      .then(() => {})
      .then((connection) => {
        console.log('Connected to MongoDB');
        resolve(connection);
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        reject(error);
      });
  });
};
