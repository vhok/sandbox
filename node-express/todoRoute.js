const express = require('express');

const router = express.Router();

// Todo service seperation of concerns
const todoService = require('./todoService');

router.route('/')
    .get(async (req, res) => {
        try {
            // CRUD: Read "List"
            const todos = await todoService.getTodos();
    
            res.json(todos);
        } catch (err) {
            throw err;
        }
    })
    .post(async (req, res) => {
        try {
            // CRUD: Create
            const todoData = req.body;
            const todo = await todoService.createTodo(todoData);
            res.status(201).json(todo);
        } catch (err) {
            throw err;
        }
    });

// Writing this way is convenient for chaining methods/verbs
router.route('/:todoId')
    .get( async (req, res) => {
        try {
            // CRUD: Read
            // req.params // <-- this thing
            // { id: (whatever the value of :id is) }

        const {todoId } = req.params;

        const todo = await todoService.getTodoById(todoId);
        } catch(err) {
            throw err;
        }
    });

module.exports = router;