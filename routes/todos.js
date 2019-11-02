const router = require('express').Router();
const repoTodos = require('./../repositorios/todos');
const repoUser = require('./../repositorios/users');

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

router.post('/',(req,res) => {
    try {
        const { body } = req;
        const newTodo = repoTodos.save(body);

        res.send(newTodo);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;