const saveAndUpdate = (todo) => {
    const errors = {
        userId : [],
        title: [],
        completed: []
    }

    const {userId, title, completed} = todo;

    //useriD validations
    if(!userId){
        errors.userId.push("El campo userId es requerido");
    }

    //title validations
    if(!title){
        errors.title.push("El campo title es requerido");
    }else{
        if(title.trim().length < 10 || title.trim().length > 50){
            errors.title.push("El campo title debe contener entre 10 y 50 caracteres");
        }
    }

    //completed validations
    if(!completed){
        errors.completed.push("El campo completed es requerido");
    }else{
        if(typeof completed != "boolean"){
            errors.completed.push("El campo completed debe ser booleano");
        }
    }


    if(errors.userId.length > 0 ||
        errors.title.length > 0 ||
        errors.completed.length > 0){
        return errors
    }else{
        return undefined;
    }
}

module.exports = {
    saveAndUpdate
}