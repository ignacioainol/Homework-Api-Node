const router = require('express').Router();
const repoUser = require('./../repositorios/users');
const repoPost = require('./../repositorios/posts');

router.get('/', (req, res) => {
    let users = repoUser.getAll();
    try {
        if (req.query.fields != null) {
            let fields = req.query.fields.split(',');
            if (fields.includes('posts')) {

                // for (let i = 0; i < users.length; i++) {
                //     let posts = repoPost.getPostByUser(users[i].id);
                //     users[i] = { ...users[i], posts };
                // }

                users = users.map(user => {
                    let posts = repoPost.getPostByUser(user.id);
                    return { ...user, posts };
                })
            }
        }

        res.send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/:id', (req, res) => {
    const response = repoPost.getPostByUser(1);

    res.json(response);
});

router.post('/', (req, res) => {
    try {
        const { body } = req;
        const newUser = repoUser.save(body);
        res.json(newUser);
        // const newUser = {id, ...body};
        // console.log(newUser);
        // res.send(newUser);

    } catch (error) {
        res.sendStatus(500).send(error);
    }
})

module.exports = router;

