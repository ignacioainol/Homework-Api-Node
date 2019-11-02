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

const save = (body) => {
    const id =  getData().length + 1;
    const newAlbum = {id, ...body};

    const albums = getData();
    albums.push(newAlbum);
    fs.writeFileSync('./repositorios/data/albums.json', JSON.stringify(albums,null,1));

    return albums;
}

const update = (albumId,body) => {
    const albums = getData();
    const index = albums.findIndex(x => x.id == albumId);
    let updateAlbum = { ...albums[index], ...body };
    albums.splice(index,1,updateAlbum);
    fs.writeFileSync(`./repositorios/data/albums.json`, JSON.stringify(albums,null,1));

    return updateAlbum;
}

const deleteAlbum = (albumId) => {
    const albums = getData();

    const albumDeleted = albums.filter((x) => x.id != albumId);
    fs.writeFileSync(`./repositorios/data/albums.json`, JSON.stringify(albumDeleted,null,1));

    return albumDeleted;
}

// const getAlbumByPhoto = (albumId) => {
//     let data = getData();
//     return data.filter(x => x.id == albumId);
//     //return albumId;
// }

const getAlbumByPhoto = (albumId) => {
    return getData().filter(x => x.id == albumId);
}

module.exports = {
    getAlbumsByUser,
    getAll,
    save,
    update,
    deleteAlbum,
    getAlbumByPhoto
}