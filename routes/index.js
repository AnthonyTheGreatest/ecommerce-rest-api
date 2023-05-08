const authRouter = require('./auth');
const cartRouter = require('./cart');
const orderRouter = require('./order');
const productRouter = require('./product');
const userRouter = require('./user');

module.exports = {
    authRouter,
    cartRouter,
    orderRouter,
    productRouter,
    userRouter
};
