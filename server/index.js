import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import { fileURLToPath } from 'url';

import userRoutes from './routes/userRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);


dotenv.config({ path: path.resolve(__dirname, '.env') });

// // Cloudinary configuration
// cloudinary.config({ 
//   cloud_name:   process.env.CLOUD_NAME, 
//   api_key:      process.env.CLOUD_API_KEY, 
//   api_secret:   process.env.CLOUD_API_SECRET,
// });

//  App setup
const app  = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(cors({
  origin:      'http://localhost:5174',  
  credentials: true,
}));

//  Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

//  Mount route
app.use('/api/auth', userRoutes);

//  Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
