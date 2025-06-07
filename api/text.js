// api/text.js
const express = require('express');
const app = express();
app.use(express.text()); // Parse plain text body

let storedText; // In-memory storage (resets on restart)

app.post('/', (req, res) => {
    console.log(req.body)
    console.log(res.body)
    storedText = req.body; // Store the plain text
    res.send('Text saved');
});

app.get('/', (req, res) => {
    res.send(storedText || 'No text stored'); // Return stored text or fallback
});

// For local testing
if (!module.parent) {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;