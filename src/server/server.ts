// server.ts
import express, { Request, Response } from 'express';
const app = express();
const PORT = process.env.PORT || 5173;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to the backend, test agian?');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
