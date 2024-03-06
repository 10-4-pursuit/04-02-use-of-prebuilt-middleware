const express = require("express");
const cors = require('cors'); 
const app = express();

//enable cors
app.use(cors());

// Parse incoming JSON payloads
app.use(express.json());


//sends a message to this endpoint
app.get('/api/message', (req, res) => {
  try {

 res.setHeader('Content-Type', 'application/json');
    
  res.send({ message: 'You are a genius!' });
  }catch (error) {
    console.error('Error in /api/message route:', error);
  }
});

// Test route to log request body and respond with a message
app.post('/submit-data', (req, res) => {
const body = req.body
  console.log('Received data:', body);
  return res.send({ 
    message: 'Data received successfully!',
    key: 'value'
 });
});



  module.exports= app