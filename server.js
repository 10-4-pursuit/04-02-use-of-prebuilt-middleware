const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


// Post routes
app.post('/submit-data', (req, res) => {
    console.log(req.body); 
    res.json({ message: 'Data received successfully' });
  });





module.exports = app;




