const saveAndUpdate = (todo) => {
    const errors = {
        userId : [],
        title: [],
        completed: []
    }

    function isEmpty(str) {
        return (!str || 0 === str.length || str.toString().trim() == "");
    }

    const {userId, title, completed} = todo;

    //useriD validations
    if(!userId || userId.toString().trim() ==  ""){
        errors.userId.push("El campo userId es requerido");
    }

    //title validations
    if(title.trim() == "" || !title){
        errors.title.push("El campo title es requerido");
    }

    //completed validations
    if(!isEmpty(completed)) {
        errors.completed.push("El campo completed es requerido");
    }
    // else{
    //     if( typeof completed != "boolean")){
    //         errors.completed.push("El campo completed debe ser booleano");
    //     }
    // }


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