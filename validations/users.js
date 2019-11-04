const save = (user) => {
    const errors = {
        name: [],
        username: [],
        email: [],
        address: [],
        phone: [],
        website: [],
        company: []
    };
    const {name, username,email,address,phone, website, company} = user;

    //name validations
    if(!name.trim()){
        errors.name.push("El campo name es requerido");
    }

    if(name.trim().length < 9 || name.trim().length > 50){
        errors.name.push("El campo name debe tener entre 10 a 50 caracteres");
    }

    //username validations
    if(!username.trim()){
        errors.username.push("El campo username es requerido");
    }

    if(username.trim().length < 9 || username.trim().length > 50){
        errors.username.push("El campo username debe tener entre 10 a 50 caracteres");
    }

    //email validations
    if(!email.trim()){
        errors.email.push("El campo email es requerido");
    }
    
    
    if(errors.name.length > 0 ||
        errors.name.length > 0){
        return errors;
    }else{
        return undefined;
    }
}

module.exports = {
    save
}