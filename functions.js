const validator = require('validator');
const { v4: uuidv4 } = require('uuid');

function generateUniqueID(fName, lName){
    var id = "";
    id = id + fName[0].toLowerCase() + lName.toLowerCase();
    var alphaNumbericVal = uuidv4().substring(0, 8);
    id = id + alphaNumbericVal;
    return id;
}

function addAccount(fName, lName, email, age){
    if(fName != null && lName != null && email != null && age != null){
        if(fName != "" && lName != "" && email != ""){
            if(validator.isEmail(email)){
                if(age >= 18){
                    fs.appendFileSynch("users.txt", fName + ",");
                    fs.appendFileSynch("users.txt", lName + ",");
                    fs.appendFileSynch("users.txt", email + ",");
                    fs.appendFileSynch("users.txt", age + ",");
                    return true;
                } else{
                    return false;
                }
            } else{
                return false;
            }
        } else{
            return false;
        }
    } else{
        return false;
    }
    
}