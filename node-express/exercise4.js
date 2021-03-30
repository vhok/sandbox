'use strict';

// 1. Require express package
const express = require('express');

// 2. Instantiate a router
const router = express.Router();

// 3. Instantiate expess "app"
const app = express();

// 3.b adds a "body parser" to your instance of express. It parses that request into something useable for you.
app.use(express.json()); // <--- middleware - can be added to route or whole application. EVERY REQUEST GETS IT REGARDLESS OF PATH. body-parser is an actual npm package.

// express.json() is an actual body parser instance - any request comes in, the middleware is going to look at it. and if it's json, middleware is going to do something nice for it.
// Converts it into a JavaScript Object from a string

// ========================= VERY COMMON PATTERN =======================
// 4. Add route handlers - Can define route handlers inside of a router, and take the router and plug it into our application.
router.route('/') // Define the starting path of router
    .get((req, res) => {

        // 4a. Respond with JSON data
        res.json({
            data: {
                path: req.path,
                method: req.method,
            }
        });
    })
    .post((req, res) => {
        // 4b. Response with JSON data
        res.json({
            data: {
                path: req.path,
                method: req.method,
                payload: req.body, // <--- middleware switch for this to work
            }
        })
    });

// 5. Add router as middleware to "app" - Can define different routes after "/" for compartmentalization.
// Hooking up router from 4. to 5. path
app.use('/router', router);
app.use('/resources', router);
app.use('/todos', router);
app.use('/group', router);

app.listen(3000, () => {
    console.log('app running...');
});