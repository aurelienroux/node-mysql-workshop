var db = require('mysql-promise')();
var colors = require("colors");

db.configure({
	"host": "localhost",
	"user": "aureroux",
	"password": "",
	"database": "addressbook"
});

db.query('SHOW DATABASES')
.then(function (result){
    return result[0].forEach(function(ele,i){
        console.log("Database ".bgYellow + i + ": " + ele.Database.bgBlue);
    });
})