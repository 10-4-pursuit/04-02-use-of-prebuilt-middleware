const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.post('/submit-data', (req, res) => {
    console.log(req.body);
    res.json({
        key: 'value',
        log: "Data received"
    });
})

module.exports = app