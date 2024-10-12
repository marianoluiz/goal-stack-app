// src/server/server.ts

import express from 'express';
import dotenv from 'dotenv';
import goalRoutes from './routes/goalRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.DB_PORT || 3000;

// Middleware to parse JSON bodies cuz json is stringified in http requests

app.use(express.json());

// Use goal routes
app.use('/api', goalRoutes);

// i need to call next(error); to go to next middleware, in my code, i never used next()

// Use error handler middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
