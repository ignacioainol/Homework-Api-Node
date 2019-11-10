const checkIfBeginsWithHttps = (url) => {
    return url.startsWith('https://')  ? true : false;
}

const saveAndUpdate = (photo) => {
    const errors = {
        albumId: [],
        title: [],
        url: [],
        thumbnailUrl: []
    }

    const {albumId,title, url,thumbnailUrl} = photo;

    //album id validation
    if(!albumId){
        errors.albumId.push("El campo albumId es requerido");
    }

    //title validations
    if(!title){
        errors.title.push("El campo title es requerido");
    }else{
        if(title.trim().length < 10 || title.trim().length > 50){
            errors.title.push("El campo title debe contener entre 10 y 50 caracteres");
        }
    }

    //url validations
    if(!url){
        errors.url.push("El campo url es requerido");
    }else{
        if(url.trim().length < 10 || url.trim().length > 50){
            errors.url.push("El campo url debe contener entre 10 y 50 caracteres");
        }

        if(!checkIfBeginsWithHttps(url.trim())){
            errors.url.push("El campo url debe comenzar con https://");
        }

    }
    //thumbnail validations
    if(!thumbnailUrl){
        errors.thumbnailUrl.push("El campo thumbnail es requerido");
    }else{
        if(thumbnailUrl.trim().length < 10 || thumbnailUrl.trim().length > 50){
            errors.thumbnailUrl.push("El campo thumbnailUrl debe contener entre 10 y 50 caracteres");
        }

        if(!checkIfBeginsWithHttps(thumbnailUrl.trim())){
            errors.thumbnailUrl.push("El campo thumbnailUrl debe comenzar con https://");
        }

    }

    if(errors.albumId.length > 0 ||
        errors.title.length > 0 ||
        errors.url.length > 0 ||
        errors.thumbnailUrl.length > 0){
            return errors;
        }else{
            return undefined;
        }

}

module.exports = {
    saveAndUpdate
}