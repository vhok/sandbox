const express = require('express');

const app = express();

const todoRouter = require('./todoRoute');
// const userRouter = require('./userRoute');
// const groupRouter = require('./groupRoute');

// middleware to manage the body of the request
app.use(express.json());

app.use('/todos', todoRouter);
// app.use('./users', userRouter);
// app.use('./groups', groupRouter);

app.listen(3000, () => {
    console.log('app listening... do stuff');
});