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

app.listen(3000, () => {
    console.log('Server started on port 3000');
})

module.exports = app;