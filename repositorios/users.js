const fs = require('fs');

const json = () => {
    return JSON.parse(fs.readFileSync('./repositorios/resources/users.json'));
}

// const getAll = () => {
//     let 
// }

module.exports = {
    getAll
}