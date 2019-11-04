const verifyDotCom = (email) => {
    let checkDotEmail = email.split('.').pop();
    return (checkDotEmail == "cl" || checkDotEmail == "com") ? true: false;
}

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
    
    if(email.trim().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null){
        errors.email.push("Debe ser un email válido");
    }

    if(!verifyDotCom(email)){
        errors.email.push("El email debe ser .cl o .com");
    }
    
    if(errors.name.length > 0 ||
        errors.username.length > 0 ||
        errors.email.length > 0){
        return errors;
    }else{
        return undefined;
    }
}

module.exports = {
    save
}