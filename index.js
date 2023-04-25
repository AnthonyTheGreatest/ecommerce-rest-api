const express = require('express');
const bodyparser = require('body-parser');
const db = require('./queries');
const app = express();
const port = 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/items', db.getItems);

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}/`);
});
