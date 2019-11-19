const verifyDotCom = (email) => {
    let checkDotEmail = email.split('.').pop();
    return (checkDotEmail == "cl" || checkDotEmail == "com") ? true: false;
}

const saveAndUpdate = (comment) => {
    const errors = {
        postId: [],
        name: [],
        email: [],
        body: []
    }

    const {postId, name, email, body} = comment;

    //postId validation
    if(!postId){
        errors.postId.push("El campo postId es requerido");
    }else{
        if(postId == ""){
            errors.postId.push("El campo postId debe tener algun valor numerico");
        }
    }

    //name validations
    if(!name){
        errors.name.push("El campo name es requerido");
    }else{
        if(name.trim().length < 100 || name.trim().length > 500){
            errors.name.push("El campo name debe contener entre 100 y 500 caracteres");
        }
    }

    //email validations
    if(!email){
        errors.email.push("El campo email es requerido");
    }else{
        if(email.trim().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null){
            errors.email.push("Debe ser un email válido");
        }

        if(!verifyDotCom(email)){
            errors.email.push("El email debe ser .cl o .com");
        }
    }

    //body validations
    if(!body){
        errors.body.push("El campo body es requerido");
    }else{
        if(body.trim().length < 100 || body.trim().length > 500){
            errors.body.push("El campo body debe contener entre 100 y 500 caracteres");
        }
    }

    if(errors.postId.length > 0 ||
        errors.name.length > 0 || 
        errors.email.length > 0 ||
        errors.body.length > 0){
        return errors;
    }else{
        return undefined;
    }
}

module.exports = {
    saveAndUpdate
}