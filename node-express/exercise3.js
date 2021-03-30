'use strict';

const express = require('express');
const app = express();

// 1. req.query
app.get('/query', (req, res) => {
    const { completed } = req.query;

    console.log(completed);

    res.json({ data: req.query });
});
// This is an object containing a property for each query string parameter.

// 2. req.params
// NOTE: This is explicitly /params/:id not /params
// NOTE: Try '/params/:id/:userId'
app.get('/params/:id', (req, res) => {
    const { id } = req.params;

    console.log(id);

    res.json({ data: req.params });
});
// This is an object containing properties that are mapping to named route parameters. Named route parameters are specified by the colon prior to their name in the route, as shown by ID in the above example.

// 3. req.method
app.get('/method', (req, res) => {
    res.json({ data: req.method });
});
// req.method will hold a string that corresponds to the HTTP method of the request (GET, POST, PUT, DELETE, etc).

// 4. req.path
app.get('/path', (req, res) => {
    res.json({ data: req.path });
});
// req.path will hold the specific path of the request URL. For this example, the path is /path.

app.listen(3000, () => {
    console.log('app running...');
});