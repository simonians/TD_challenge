const mysql = require("mysql");

const fs = require("fs");
const mysql_data = JSON.parse(fs.readFileSync('./settingsToIgnore/database_settings.json', "utf-8"))[0];

const connection = mysql.createConnection({
    host: mysql_data.host,
    user: mysql_data.user,
    password: mysql_data.password,
    database: mysql_data.database
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