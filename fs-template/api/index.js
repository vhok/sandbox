/**2. SET UP .ENV FILE WITH PORT NUMBER
 * Note: 
 * -This is convenient during development because we don't have to assign value at runtime.
 * ie SET PORT=4000, then node api/index.js
 * -The path to the port number must use the absolute path.
 * -__dirname is a keyword tha can be used to acquire the path location. But, may not be recommended.
 *  */
require('dotenv').config({
    path: `${__dirname}/.env`
});


// 1. SETTING UP SERVER - a) REQUIRING EXPRESS.
// Require the module
const express = require('express');
// Create an instance
const app = express();


// 1. SETTING UP SERVER - c) SPECIFY WHAT ACTION TO PERFORM WHEN HTTP REQUEST SENT TO ROUTE.
// Note: Since we're using "proxy" in package.json, any non-react related requests with shorthands get directed there.
// e.g. In this example, /api -> localhost:4000/api
app.use('/api', (req, res) => {
    res.json({
        // your defined key-value pairs here...
        // ...
        data: 'Example string returned'
    })
});


// 1. SETTING UP SERVER - b) LISTEN FOR HTTP REQUESTS.
// Note: PORT is an environment variable we need to specify for our environment.
app.listen(process.env.PORT, () => {
    console.log(`API server listening on PORT = ${process.env.PORT}`);
});