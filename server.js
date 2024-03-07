const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} can you see it?`)
});

app.use(express.json());

app.post('/submit-data', (req, res) => {
    console.log('Received data:', req.body);
    res.send('Data received successfully!');
});

module.exports = app