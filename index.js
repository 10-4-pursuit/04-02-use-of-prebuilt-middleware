const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/submit-data', (req, res) => {
  try {
    res.status(200).json({
      key: 'value',
      log: 'Data received'
    });

  } catch (error) {
    res.status(500);
    console.log(`There was an error: ${error.message}`);
  } 
});

module.exports = app;