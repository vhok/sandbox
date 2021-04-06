

const todos = [
    { "id": "1", "description": "Officer", "completed": false, "userId": 57, "groupId": 74 },
    { "id": "2", "description": "connecting AGP", "completed": false, "userId": 79, "groupId": 20 },
    { "id": "3", "description": "Designer alarm", "completed": false, "userId": 3, "groupId": 52 },
    { "id": "4", "description": "neural Buckinghamshire", "completed": false, "userId": 82, "groupId": 53 },
    { "id": "5", "description": "black", "completed": false, "userId": 16, "groupId": 12 },
    { "id": "6", "description": "Steel Intelligent Object-based", "completed": false, "userId": 67, "groupId": 48 },
    { "id": "7", "description": "green", "completed": false, "userId": 61, "groupId": 82 },
    { "id": "8", "description": "Global", "completed": false, "userId": 32, "groupId": 6 },
    { "id": "9", "description": "alliance", "completed": false, "userId": 34, "groupId": 82 },
    { "id": "10", "description": "Gorgeous Metal Cheese", "completed": false, "userId": 79, "groupId": 100 },
    { "id": "11", "description": "Cambridgeshire Alabama AI", "completed": false, "userId": 94, "groupId": 18 },
    { "id": "12", "description": "Mandatory generating transmitter", "completed": false, "userId": 11, "groupId": 5 },
    { "id": "13", "description": "revolutionary compelling", "completed": false, "userId": 59, "groupId": 84 },
    { "id": "14", "description": "structure", "completed": false, "userId": 57, "groupId": 91 },
    { "id": "15", "description": "connect", "completed": false, "userId": 36, "groupId": 16 },
    { "id": "16", "description": "North Carolina wireless", "completed": false, "userId": 90, "groupId": 9 },
    { "id": "17", "description": "definition Licensed XSS", "completed": false, "userId": 23, "groupId": 12 },
    { "id": "18", "description": "SAS", "completed": false, "userId": 62, "groupId": 85 },
    { "id": "19", "description": "withdrawal backing up", "completed": false, "userId": 1, "groupId": 73 },
    { "id": "20", "description": "Point HDD concept", "completed": false, "userId": 99, "groupId": 60 },
    { "id": "21", "description": "I created a todo!", "completed": true, "userId": 57, "groupId": 28 },
    { "id": "22", "description": "I created a todo!", "completed": false, "userId": 94, "groupId": 9 },
    { "id": "23", "description": "I created a todo hahaha!", "completed": false, "userId": 30, "groupId": 48 }
];

const users = [
    { "id": "1", "createdAt": "2021-03-25T15:41:24.714Z", "name": "Kendrick Buckridge", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/tur8le/128.jpg" },
    { "id": "2", "createdAt": "2021-03-25T15:27:04.631Z", "name": "Christa Kautzer", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/gcmorley/128.jpg" },
    { "id": "3", "createdAt": "2021-03-25T09:35:52.393Z", "name": "Preston Padberg", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg" },
    { "id": "4", "createdAt": "2021-03-25T17:45:31.603Z", "name": "Darrick Ward", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mizhgan/128.jpg" },
    { "id": "5", "createdAt": "2021-03-25T16:08:37.573Z", "name": "Terrance Cartwright", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/fjaguero/128.jpg" },
    { "id": "6", "createdAt": "2021-03-24T23:27:24.813Z", "name": "Mr. Johanna Runte", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/snowshade/128.jpg" }
];

const groups = [
    { "id": "1", "name": "calculate", "userId": 23 },
    { "id": "2", "name": "hack", "userId": 66 },
    { "id": "3", "name": "Berkshire", "userId": 50 }
];

const express = require('express');
const app = express();

const router = express.Router();

// ======== Create an express app with 3 endpoints =========
// users - returns list of users
// todos - returns list of todos
// groups - returns a list of groups

// allow the user to look up specific resource by id (e.g. /users/13 will return the user with id=13)




app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const selectedUser = users.filter((user) => {
        return parseInt(id) === parseInt(user.id);
    });

    res.json({
        ...selectedUser
    });
});

app.get('/users', (req, res) => {
    res.json({
        ...users
    });
});

app.get('/todos/:id', (req, res) => {
    const { id } = req.params;
    const selectedTodo = todos.filter((todo) => {
        return parseInt(id) === parseInt(todo.id);
    });

    res.json({
        ...selectedTodo    
    });
});

app.get('/todos', (req, res) => {
    res.json({
        ...todos
    });
});

app.get('/groups/:id', (req, res) => {
    const { id } = req.params;
    const selectedGroup = groups.filter((group) => {
        return parseInt(id) === parseInt(group.id);
    });

    res.json({ 
        ...selectedGroup
    });
});

app.get('/groups', (req, res) => {
    res.json({
        ...groups
    });
});








// router.route('/')
//     .get( (req, res) => {
//         res.json({
//             param: req.path
//         });
//     });

// router.route('todos')
//     .get( (req, res) => {
//         res.json({
//             ...todos
//         });
//     });


// app.use('/users', router);












app.listen( 3000, () => {
    console.log('app is running...');
})