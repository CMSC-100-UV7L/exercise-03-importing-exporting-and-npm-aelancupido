//import statement
const functions = require('./functions');

//generateUniqueID function calls
console.log(functions.generateUniqueID("Angela", "Pleasant"));
console.log(functions.generateUniqueID("Brandi", "Dreamer"));

//Invalid addAccount function calls
functions.addAccount("Dustin", "Broke", "someemail@bar.com", 16);
functions.addAccount("John", "Burb", "na", 34);
functions.addAccount("Diva", "", "diva@email.com", 26);
functions.addAccount("Amy", "Tsang", "tsang@email.com");

//addAccount function calls
functions.addAccount("Cassandra", "Goth", "cgoth@goth.com", 24);
functions.addAccount("Coral", "Oldie", "co@bar.com", 63);