const validator = require('validator');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

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
                    var id = generateUniqueID(fName, lName);

                    fs.appendFileSync("users.txt", fName + ",");
                    fs.appendFileSync("users.txt", lName + ",");
                    fs.appendFileSync("users.txt", email + ",");
                    fs.appendFileSync("users.txt", age + ",");
                    fs.appendFileSync("users.txt", id + "\n");

                    console.log("User has been added to the text file!");
                    return true;
                } else{
                    console.log("Error! The user cannot be a minor!");
                    return false;
                }
            } else{
                console.log("Error! Invalid email!");
                return false;
            }
        } else{
            console.log("Error! Names and email cannot be blank!");
            return false;
        }
    } else{
        console.log("Error! One of the fields are null!");
        return false;
    }
}

module.exports = { generateUniqueID, addAccount };