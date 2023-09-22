import bcrypt from "bcryptjs"



export const encryptPassword = (pass : string) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);
    return hash;
}


export const formatClientError = (error : string | undefined) =>  {
    if (error){
        return JSON.parse(error) as unknown;
    }else{
        return []
    }
    
}

