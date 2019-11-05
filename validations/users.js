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

    if(email.trim().length < 9 || email.trim().length > 50){
        errors.email.push("El campo email debe tener entre 10 a 50 caracteres");
    }
    
    if(email.trim().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null){
        errors.email.push("Debe ser un email válido");
    }

    if(!verifyDotCom(email)){
        errors.email.push("El email debe ser .cl o .com");
    }

    //Phonenumber validations
    if(phone.trim().length < 10 || phone.trim().length > 30){
        errors.phone.push("El campo teléfono debe tener entre 10 a 30 caracteres");
    }

    if(phone.trim().match(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/) == null){
        errors.phone.push("En numero ingresado no es correcto");
    }

    
    if(errors.name.length > 0 ||
        errors.username.length > 0 ||
        errors.email.length > 0 ||
        errors.phone.length > 0){
        return errors;
    }else{
        return undefined;
    }
}

module.exports = {
    save
}