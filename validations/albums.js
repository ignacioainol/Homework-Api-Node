const saveAndUpdate = (album) => {
    const errors = {
        userId: [],
        title: []
    }

    const {userId, title} = album;

    //user id validation
    if(!userId){
        errors.userId.push("El campo userId es requerido");
    }

    //title validations
    if(!title || title.toString().trim() == ""){
        errors.title.push("El campo title es requerido");
    }else{
        if(title.trim().length < 10 || title.trim().length > 50){
            errors.title.push("El campo title debe contener entre 10 y 50 caracteres");
        }
    }
    
    if(errors.userId.length > 0 ||
        errors.title.length > 0){
        return errors;
    }else{
        return undefined;
    }

} 

module.exports = {
    saveAndUpdate
}