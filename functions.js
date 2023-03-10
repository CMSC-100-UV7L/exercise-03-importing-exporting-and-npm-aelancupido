//import statements
const validator = require('validator');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

//generateUniqueID function
function generateUniqueID(fName, lName){
    var id = ""; //stores the unique id 

    //adds the first letter of the first name in lowercase and the last name in lowercase to the id
    id = id + fName[0].toLowerCase() + lName.toLowerCase();

    //gets the 8 character random alphanumerical character string
    var alphaNumbericVal = uuidv4().substring(0, 8);

    //adds the alphanumerical character string to the id
    id = id + alphaNumbericVal;

    return id; //returns the unique id
}

//addAccount function
function addAccount(fName, lName, email, age){
    //checks if there are empty parameters
    if(fName != null && lName != null && email != null && age != null){
        //checks if first name, last name, and email are empty strings
        if(fName != "" && lName != "" && email != ""){
            //checks if email is a valid email
            if(validator.isEmail(email)){
                //checks if age is greater than or equal to 18
                if(age >= 18){
                    var id = generateUniqueID(fName, lName); //generates the unique id for the user

                    //appends the first name, last name, email, age, and id to the users.txt file
                    fs.appendFileSync("users.txt", fName + ",");
                    fs.appendFileSync("users.txt", lName + ",");
                    fs.appendFileSync("users.txt", email + ",");
                    fs.appendFileSync("users.txt", age + ",");
                    fs.appendFileSync("users.txt", id + "\n");

                    console.log("User has been added to the text file!"); //Success message if user has been added to the users.txt file
                    return true;
                } else{
                    console.log("Error! The user cannot be a minor!"); //Error message if age is less than 18
                    return false;
                }
            } else{
                console.log("Error! Invalid email!"); //Error message if email is not valid
                return false;
            }
        } else{
            //Error message if first name, last name, or email is an empty string
            console.log("Error! Names and email cannot be blank!");  
            return false;
        }
    } else{
        console.log("Error! One of the fields are null!"); //Error message if one of the function parameters are null
        return false;
    }
}

//export statements
module.exports = { generateUniqueID, addAccount };