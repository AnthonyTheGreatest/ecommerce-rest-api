const express = require('express');
const session = require('express-session');
const passport = require('passport');
// const cors = require('cors');
require('dotenv').config();
// const cartRouter = require('./routes/cart');
// const orderRouter = require('./routes/order');
// const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT || 3001;

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({  
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
      }
    })
  );

app.get('/', (req, res) => {
    res.send('Welcome to the home page.');
});

// app.use('/carts', cartRouter);
// app.use('/orders', orderRouter);
// app.use('/produsts', productRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`(Ctrl + click) http://localhost:${port}`);
});
