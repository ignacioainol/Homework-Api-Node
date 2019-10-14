const router = require('express').Router();
const users = require('./../repositorios/resources/users.json');
const { getAllUsers } = require('./../repositorios/users');
router.get('/', (req, res) => {

    if (req.query.fields != null) {
        const fields = req.query.fields.split(',');

        const allContent = {};
        if (fields.includes('posts')) {
            allContent.users = users;
            //allContent.users[0].posts = "no one like you";

            for(i = 0; i< posts.lenght; i++){
                if(posts.userId = users.id){
                    allContent.users[i].posts = posts.body;
                }
            }
        }

        res.send(allContent);
    }else{
        res.send(users);
    }
});

router.post('/', (req,res) => {
    try {
        const { body } = req;
        const id = users[users.length - 1].id + 1;
        const newUser = {id, ...body};
        console.log(newUser);
        res.send(newUser);

    } catch (error) {
        res.status(500).send(error.message);
    }
})

module.exports = router;

