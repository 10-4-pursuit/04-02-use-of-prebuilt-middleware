const express = require("express");
const cors = require('cors'); 
const app = express();

const PORT = 3000;

//utilizes cors for all routes
app.use(cors());

// Parse incoming JSON payloads
app.use('/submit-data', express.json());

// Test route to log request body and respond with a message
app.post('/submit-data', (req, res) => {
    const body = req.body
      console.log('Received data:', body);
      return res.send({ 
        // message: 'Data received successfully!',
        key: 'value'
     });
    });


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));