const express = require('express');
const connectDB = require('./config/conn');
const { saveFIR } = require('./controllers/firController');
const cors = require('cors'); // Import the cors package
// import axios from 'axios';
// Load environment variables from .env
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware for JSON parsing
app.use(express.json());

// const api = axios.create({
//   baseURL: 'http://localhost:5000', // Update this with your backend server URL
// });

// Allow requests from localhost:3000 (your frontend)
app.use(cors({ origin: 'http://localhost:3000' }));

// Define route to handle form submission and save FIR data
app.post('/api/registerfir', async (req, res) => {
  try {
    await saveFIR(req.body); // Save FIR data from request body
    res.status(201).json({ message: 'FIR registered successfully' });
  } catch (error) {
    console.error('Error registering FIR:', error);
    res.status(500).json({ message: 'Failed to register FIR' });
  }
});


app.get('/',(req,res)=>{
  res.send("hello world");
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});