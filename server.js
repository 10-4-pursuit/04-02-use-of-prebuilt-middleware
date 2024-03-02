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

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

afterAll((done) => {
    server.close(done);
});

module.exports = app;