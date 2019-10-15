const router = require('express').Router();
const repoUser = require('./../repositorios/users');

router.get('/', (req, res) => {
    try {
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
            const users = repoUser.getAll();
            res.send(users);
        }   
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/', (req,res) => {
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

