const mySqlConnection = require("../../configurations/databaseConfiguration")
const handleError = require("../../exceptions/handleErrors")
const queries = require("../../queries/customers_queries").customersQueries;

const createCustomer = (req, res) => {
    const { name, lastname } = req.body;
    const query = queries.createCustomer(name,lastname)
    mySqlConnection.query(query, [name, lastname], (err, rows, fields) => {
        if (!err) {
            res.status(200).json({ message: "Customer Saved" });
        } else {
            handleError.errorResponse(res, "Not Found", 404, true)
        }
    });
}

module.exports = { createCustomer };
