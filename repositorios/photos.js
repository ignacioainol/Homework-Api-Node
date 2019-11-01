const fs = require('fs');

const getData = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/photos.json'));
}

const getAll = () => {
    return getData();
}

const getPhotoByAlbumId = (albumId) => {
    return getData().filter(x => x.albumId === parseInt(albumId));
}

module.exports = {
    getAll,
    getPhotoByAlbumId
}