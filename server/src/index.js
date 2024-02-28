const express = require("express");
const cors = require('cors');
const app = express();

//enable cors
app.use(cors());

// Parse incoming JSON payloads
// app.use(express.json());

app.get('/api/message', (req, res) => {
  try {
 // Set the content type header to 'application/json'
 res.setHeader('Content-Type', 'application/json');
    
  res.send({ message: 'You are a genius!' });
  }catch (error) {
    console.error('Error in /api/message route:', error);
  }
});

// Test route to log request body and respond with a message
app.post('/submit-data', (req, res) => {
  console.log('Received data:', req.body);
  res.send({ message: 'Data received successfully!' });
});

// app.get('/', (req, res) => {
//     res.send('Save The World!');
//   });

  module.exports= app