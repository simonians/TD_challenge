const mySqlConnection = require("../configurations/databaseConfiguration")

exports.getCustomer = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM customers WHERE id = ?';
        mySqlConnection.query(query, [id], (err, rows, fields) => {
            resolve(rows)
        });
    })
}

exports.getCustomerCredit = (customerId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM available_credit WHERE customer_id = ?';
        mySqlConnection.query(query, [customerId], (err, rows, fields) => {
            resolve(rows)
        });
    })
}