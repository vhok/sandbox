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


function getTodos() {
    return Promise.resolve(todos);
}

function getTodoById(id) {
    // .find() looks for an item
    const todo = todos.find( (todo) => {
        if(todo.id === id) {
            return todo;
        } else {
            return null;
        }
    });

    return Promise.resolve(todo);
}

module.exports = {
    getTodos,
    getTodoById
}