const mySqlConnection = require("../../configurations/databaseConfiguration")
const handleError = require("../../exceptions/handleErrors")
const queries = require("../../queries/customers_queries").customersQueries;

const getCustomer = (req, res) => {
    const { id } = req.params;
    const query = queries.getCustomerById(id)
    mySqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            rows.length > 0 ? res.status(200).json(rows[0]) : handleError.errorResponse(res, `No hay ningún cliente con id ${id}`, 400, true);
        } else {
            handleError.errorResponse(res, "Not Found", 404, true)
        }
    });
}

module.exports = {getCustomer}