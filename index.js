const express = require('express');
require('dotenv').config();
// "process.env now has the keys and values you defined in your .env file"
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}/`);
});
