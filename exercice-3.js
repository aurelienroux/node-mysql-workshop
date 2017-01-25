var db = require('mysql-promise')();
var colors = require("colors");

db.configure({
	"host": "localhost",
	"user": "aureroux",
	"password": "",
	"database": "addressbook"
});

db.query('SELECT Account.id, Account.email, AddressBook.name FROM Account JOIN AddressBook ON Account.id = AddressBook.accountId')
.then(function (result){
    return result[0].reduce(function(acc, cur, i){
        if(acc != cur.id){
            console.log("#".bgYellow.bold + acc.toString().bgYellow.bold + ": ".bgYellow.bold + cur.email.bgBlue.bold);
            console.log("   " + cur.name);
            return acc = cur.id;
        }
        else {
            console.log("   " + cur.name);
            return acc = cur.id;
        }
    }, 0);
});
// .then( result => console.log( result[0] ));
