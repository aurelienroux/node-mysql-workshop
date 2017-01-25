var db = require('mysql-promise')();
var colors = require("colors");

db.configure({
	"host": "localhost",
	"user": "aureroux",
	"password": "",
	"database": "addressbook"
});

db.query('SELECT * FROM Account LIMIT 5')
.then(function (result){
    result[0].forEach(function(ele, i){
        i = i.toString();
        console.log("#".bold + i.bold + ": ".bold + ele.email.america );
    });
});