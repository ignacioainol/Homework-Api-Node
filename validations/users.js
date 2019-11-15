const verifyDotCom = (email) => {
    let checkDotEmail = email.split('.').pop();
    return (checkDotEmail == "cl" || checkDotEmail == "com") ? true: false;
}

const saveAndUpdate = (user) => {
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
    if(!name){
        errors.name.push("El campo name es requerido");
    }else{
        if(name.trim().length < 9 || name.trim().length > 50){
            errors.name.push("El campo name debe tener entre 10 a 50 caracteres");
        }
    }


    //username validations
    if(!username){
        errors.username.push("El campo username es requerido");
    }else{
        if(username.trim().length < 9 || username.trim().length > 50){
            errors.username.push("El campo username debe tener entre 10 a 50 caracteres");
        }
    }

    //email validations
    if(!email){
        errors.email.push("El campo email es requerido");
    }else{
        if(email.trim().length < 9 || email.trim().length > 50){
            errors.email.push("El campo email debe tener entre 10 a 50 caracteres");
        }
        
        if(email.trim().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null){
            errors.email.push("Debe ser un email válido");
        }
    
        if(!verifyDotCom(email)){
            errors.email.push("El email debe ser .cl o .com");
        }
    }

    // //address validations
    if(!address){
        errors.address.push("El campo address es requerido");
    }else{
        if(!address.street){
            errors.address.push("El campo street es requerido");
        }else{
            if(address.street.trim().length < 9 || address.street.trim().length > 50 ){
                errors.address.push("El campo streeet debe tener entre 10 a 50 caracteres");
            }
        }

        if(!address.suite){
            errors.address.push("El campo suite es requerido");
        }else{
            if(address.suite.trim().length < 9 || address.suite.trim().length > 50 ){
                errors.address.push("El campo suite debe tener entre 10 a 50 caracteres");
            }
        }

        if(!address.city){
            errors.address.push("El campo city es requerido");
        }else{
            if(address.city.trim().length < 9 || address.city.trim().length > 50 ){
                errors.address.push("El campo city debe tener entre 10 a 50 caracteres");
            }
        }

        if(!address.zipcode){
            errors.address.push("El campo zipcode es requerido");
        }else{
            if(address.zipcode.trim().length < 9 || address.zipcode.trim().length > 50 ){
                errors.address.push("El campo zipcode debe tener entre 10 a 50 caracteres");
            }
        }

        if(!address.geo){
            errors.address.push("El campo geo es requerido");
        }else{
            if(!address.geo.lat){
                errors.address.push("El campo lat es requerido");
            }else{
                if(address.geo.lat.length < 7 || address.geo.lat.length > 50){
                    errors.address.push("El campo lat debe tener entre 7 a 50 caracteres");
                }
            }

            if(!address.geo.lng){
                errors.address.push("El campo lng es requerido");
            }else{
                if(address.geo.lng.length < 7 || address.geo.lng.length > 50){
                    errors.address.push("El campo lng debe tener entre 7 a 50 caracteres");
                }
            }
        }
    }

    //Phonenumber validations
    if(!phone){
        errors.phone.push("El campo phone es requerido")
    }else{
        if(phone.trim().length < 10 || phone.trim().length > 30){
            errors.phone.push("El campo teléfono debe tener entre 10 a 30 caracteres");
        }
    
        if(phone.trim().match(/[0-9-]+$/) == null){
            errors.phone.push("El numero ingresado no es correcto");
        }
    }

    //website validations
    if(!website){
        errors.website.push("El campo website es requerido");
    }else{
        if(website.trim().length < 10 || website.trim().length > 50){
            errors.website.push("El campo website debe tener entre 10 a 30 caracteres");
        }
    }

    //company validations
    if(!company){
        errors.company.push("El campo company es requerido");
    }else{
        if(!company.name){
            errors.company.push("El campo name de company es requerido");
        }else{
            if(company.name.trim().length < 10 || company.name.trim().length > 50){
                errors.company.push("El campo name de company debe tener entre 10 a 30 caracteres");
            }
        }

        if(!company.catchPhrase){
            errors.company.push("El campo catchPhrase de company es requerido");
        }else{
            if(company.catchPhrase.trim().length < 10 || company.catchPhrase.trim().length > 50){
                errors.company.push("El campo catchPhrase de company debe tener entre 10 a 30 caracteres");
            }
        }

        if(!company.bs){
            errors.company.push("El campo bs de company es requerido");
        }else{
            if(company.bs.trim().length < 10 || company.bs.trim().length > 50){
                errors.company.push("El campo bs de company debe tener entre 10 a 30 caracteres");
            }
        }
    }

    if(errors.name.length > 0 ||
        errors.username.length > 0 ||
        errors.email.length > 0 ||
        errors.address.length > 0 ||
        errors.phone.length > 0 ||
        errors.website.length > 0 ||
        errors.company.length > 0){
        return errors;
    }else{
        return undefined;
    }
}

module.exports = {
    saveAndUpdate
}