const express = require('express');
const app = express();

// 1. string
app.get('/html', (req, res) => {
    res.send('<h1>Hello World</h1><br /><h3>HTML Route<h3>');
});

// 2. string
app.get('/whatis', (req, res) => {
    res.send("{ main: 'hello world', meta: 'whatis route'}");
});

// 3. JSON
app.get('/json', (req, res) => {
    res.json({ main: 'hello world', meta: 'JSON route'});
});

// 4. JSON (by inference)
app.get('/', (req, res) => {
    res.status(418).send({
        data: "I'm a Teapot"
    });
});

app.listen(3000, () => {
    console.log('app running...');
})