const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "online_motorbike_shop"
})
connection.connect((e)=> {
    if(e){
        console.log(e);
        return;
    } else{
        console.log("DataBase is connected");
    }
})

module.exports = connection;