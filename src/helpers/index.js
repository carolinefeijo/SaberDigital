export function getRole(role){
    switch (role){
        case 1 : 
        return "Professor"
        case 2 : 
        return "Responsavel"
    }
}
export function getGenderRole(role, gender){
    if(role==1){
        if(gender=="M"){
            return "Professor"
        } else{
            return "Professora"
        }

    }
}