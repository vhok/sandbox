'use strict';

// Require express package
const express = require('express');


// Instantiate express "app" -> An instance of express we can use and play with.
const app = express();

// PATH, FUNCTION(request, response, [next])
// request is the request object you send (e.g. by postman/insomnia)
// response is the object that we can send back to the user (can edit and do bunch fo stuff)

// We'll send back 'hello world' if we get a request to path '/'
app.get('/', (req, res) => {
    res.send('hello world');
});

// Start application
app.listen(3000, () => {
    console.log('app running...');
});

