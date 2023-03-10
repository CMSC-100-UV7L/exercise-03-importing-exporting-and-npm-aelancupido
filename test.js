const functions = require('./functions');

console.log(functions.generateUniqueID("Angela", "Pleasant"));
console.log(functions.generateUniqueID("Brandi", "Dreamer"));

functions.addAccount("Dustin", "Broke", "someemail@bar.com", 16);
functions.addAccount("John", "Burb", "na", 34);
functions.addAccount("Diva", "", "diva@email.com", 26);
functions.addAccount("Amy", "Tsang", "tsang@email.com");

functions.addAccount("Cassandra", "Goth", "cgoth@goth.com", 24);
functions.addAccount("Coral", "Oldie", "co@bar.com", 63);