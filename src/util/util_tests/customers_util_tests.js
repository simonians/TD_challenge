const mySqlConnection = require("../../configurations/databaseConfiguration")
const queries = require("../../queries/customers_queries").customersQueries;

const resetDataSet = () => {
    const query_deleteAvailableCredit = 'DELETE FROM available_credit';
    const query_deleteCustomers = 'DELETE FROM customers';
    mySqlConnection.query(query_deleteAvailableCredit);
    mySqlConnection.query(query_deleteCustomers);
}

const insertCustomer = (name, lastname) => {
    const query = queries.createCustomer(name, lastname)
    mySqlConnection.query(query);
}

module.exports = {resetDataSet, insertCustomer}