// const { on } = require('@ngrx/store');


var mysql=require('mysql');
var con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456789"
});
con.connect(function(err){
    if(err)throw err;
    console.log("connected !")
})