const mySqlConnection = require("../../configurations/databaseConfiguration")
const handleError = require("../../exceptions/handleErrors")
const queries = require("../../queries/customers_queries").customersQueries;
const httpStatus = require('http-status');

const get = (req, res) => {
    const { id, sortedType } = req.params;
    let query = "";

    if (!id && !sortedType) {
        query = queries.getAll();
        mySqlConnection.query(query, (err, rows, fields) => {
            if (!err) {
                rows.length > 0 ? res.status(httpStatus.OK).json(rows) : handleError.errorResponse(res, "No hay clientes cargados aún", 400, true);
            }
            else {
                handleError.errorResponse(res, "Not Found", 404, true)
            }
        }
        )
    }
    else if (!id) {
        query = parseInt(sortedType)===1 ? queries.getAllCustomersSorted("DESC") : queries.getAllCustomersSorted("ASC");
        mySqlConnection.query(query, (err, rows, fields) => {
            if (!err) {
                rows.length > 0 ? res.status(httpStatus.OK).json(rows) : handleError.errorResponse(res, "No hay clientes cargados aún", 400, true);
            }
            else {
                handleError.errorResponse(res, "Not Found", 404, true)
            }
        })
    }
    else {
        query = queries.getCustomerById(id)
        mySqlConnection.query(query, [id], (err, rows, fields) => {
            if (!err) {
                rows.length > 0 ? res.status(httpStatus.OK).json(rows[0]) : handleError.errorResponse(res, `No hay ningún cliente con id ${id}`, 400, true);
            } else {
                handleError.errorResponse(res, "Not Found", 404, true)
            }
        });
    }





}

module.exports = { get }