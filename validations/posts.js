const saveAndUpdate = (post) => {
    const errors = {
        userId: [],
        title: [],
        body: []
    }

    const {userId, title, body} = post;

    //userId validation
    if(!userId){
        errors.userId.push("El campo userId es requerido");
    }else{
        if(userId == ""){
            errors.userId.push("El campo userId debe tener algun valor");
        }
    }

    //title validations
    if(!title){
        errors.title.push("El campo title es requerido");
    }else{
        if(title.trim().length < 100 || title.trim().length > 500){
            errors.title.push("El campo title debe contener entre 100 a 500 caracteres");
        }
    }

    //body validations
    if(!body){
        errors.body.push("El campo body es requerido");
    }else{
        if(body.trim().length < 100 || body.trim().length > 500){
            errors.body.push("El campo body debe contener entre 100 a 500 caracteres");
        }
    }

    if(errors.userId.length > 0 ||
        errors.title.length > 0 ||
        errors.body.length > 0){
        return errors;
    }else{
        return undefined;
    }
}


module.exports = {
    saveAndUpdate
}