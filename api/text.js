// api/text.js
const express = require('express');
const app = express();
app.use(express.text()); // Parse plain text body

let storedText = ''; // In-memory storage (resets on serverless function restart)

app.post('/', (req, res) => {
    storedText = req.body;
    res.send('Text saved');
});

app.get('/', (req, res) => {
    res.send(storedText);
});

module.exports = app;