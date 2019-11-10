const router = require('express').Router();
const repoTodos = require('./../repositorios/todos');
const repoUser = require('./../repositorios/users');

//validations todo
const todoValidation = require('./../validations/todos');

router.get('/', (req,res) => {
    try {
        let todos = repoTodos.getAll();

        if(req.query.fields != null){
            let fields = req.query.fields;
            if(fields == "user"){
                todos = todos.map(todo => {
                    let user = repoUser.getUserById(todo.userId);
                    return {...todo, user};
                });
            }
        }

        res.send(todos);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/:id', (req,res) => {
    try {
        let todoId = req.params.id;
        let todo = repoTodos.getTodoById(todoId);

        if(req.query.fields != null){
            let fields = req.query.fields;

            if(fields == 'user'){
                let user = repoUser.getUserById(todo.userId);
                todo = {...todo, user};
            }
        }

        res.send(todo);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/',(req,res) => {
    try {
        const { body } = req;
        const todoErrors = todoValidation.saveAndUpdate(body);

        if(todoErrors){
            res.status(400).send(todoErrors);
            return;
        }

        const newTodo = repoTodos.save(body);
        res.send(newTodo);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.put('/:id', (req,res) => {
    try {
        const { id } = req.params;
        const { body } = req;

        const todoErrors = todoValidation.saveAndUpdate(body);

        if(todoErrors){
            res.status(400).send(todoErrors);
            return;
        }

        const updatedTodo = repoTodos.update(id,body);

        res.send(updatedTodo);

    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/:id',(req,res) => {
    try {
        const { id } = req.params;
        const todoDeleted = repoTodos.deleteTodo(id);

        res.send(todoDeleted);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;