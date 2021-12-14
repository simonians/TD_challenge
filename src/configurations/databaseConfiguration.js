const mysql = require("mysql");
const serverConfig = require("./serverConfiguration")
const ENV = serverConfig.NODE_ENV;
const {db_prod_settings, db_tests_settings} = require("../settingsToIgnore/DB_settings")

console.log("Env --> " + ENV)

const connection = ENV === "test" ?  
mysql.createConnection({
    host: db_tests_settings.host,
    user: db_tests_settings.user,
    password: db_tests_settings.password,
    database: db_tests_settings.database
}) :
mysql.createConnection({
    host: db_prod_settings.host,
    user: db_prod_settings.user,
    password: db_prod_settings.password,
    database: db_prod_settings.database
});

connection.connect((e)=> {
    if(e){
        console.log(e);
        return;
    } else{
        console.log("DataBase is connected");
    }
})

module.exports = connection;