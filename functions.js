import isEMail from 'validator/lib/isEmail'
import { v4 as uuidv4 } from 'uuid';


function generateUniqueID(fName, lName){
    var id = "";
    id = id + fName[0].toLowerCase() + lName.toLowerCase();

    return id;
}

function addAccount(fName, lName, email, age){
    if(fName != null && lName != null && email != null && age != null){
        if(fName != "" && lName != "" && email != ""){
            //validation if email
                if(age >= 18){
                    //write txt file
                }
        }
    }
    
}