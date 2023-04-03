import bcrypt from "bcryptjs"



export const encryptPassword = (pass : string) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(pass, salt);
    return hash;
}


export const formatClientError = (error : string | undefined) => {
    if (error){
        return JSON.parse(error);
    }else{
        return []
    }
    
}

