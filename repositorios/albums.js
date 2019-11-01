const fs = require('fs');

const getData = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/albums.json'));
}

const getAll = () => {
    return getData();
}

const getAlbumsByUser = (userId) => {
    let data = getData();
    return data.filter(x => x.userId === parseInt(userId)) || undefined;
}

module.exports = {
    getAlbumsByUser,
    getAll
}