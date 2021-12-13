const mySqlConnection = require("../../configurations/databaseConfiguration")
const handleError = require("../../exceptions/handleErrors")
const utils = require("../../util/customers_util")
const queries = require("../../queries/customers_queries").customersQueries;

const deleteCustomer = (req, res) => {
    const { id } = req.params;
    const query = queries.deleteCustomer;
    utils.getCustomer(id).then(rows => {
        if (rows.length === 0) {
            handleError.errorResponse(res, `No hay ningún cliente con id ${id} en la base de datos`, 400, true);
            return;
        }
        mySqlConnection.query(query, [id], (err, rows, fields) => {
            if (!err) {
                res.status(200).json({ message: 'Customer Deleted' });
            } else {
                handleError.errorResponse(res, "Not Found", 404, true)
            }
        });

    })
}

module.exports = { deleteCustomer };
