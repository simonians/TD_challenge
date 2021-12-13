const mySqlConnection = require("../../configurations/databaseConfiguration")
const handleError = require("../../exceptions/handleErrors")
const queries = require("../../queries/customers_queries").customersQueries;

const getCustomersSorted = (req, res) => {
    const query = queries.getAllCustomersSorted();

    mySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            rows.length > 0 ? res.status(200).json(rows) : handleError.errorResponse(res, "No hay clientes cargados aún", 400, true);
        }
        else {
            handleError.errorResponse(res, "Not Found", 404, true)
        }
    })

}

module.exports = {getCustomersSorted}