const mySqlConnection = require("../../configurations/databaseConfiguration")
const handleError = require("../../exceptions/handleErrors")
const utils = require("../../util/customers_util")
const queries = require("../../queries/customers_queries").customersQueries;

const updateCustomer = (req, res) => {
    const { name, lastname } = req.body;
    const { id } = req.params;
    const query = queries.updateCustomer(name, lastname, id);
    
    utils.getCustomer(id).then(customer => {
        if (customer.length === 0) {
            handleError.errorResponse(res, `El cliente con id ${id} no ha sido encontrado en la base de datos.`, 404, true)
            return
        } else {
            mySqlConnection.query(query, [name, lastname], (err, rows, fields) => {
                if (!err) {
                    res.status(200).json({ message: 'Customer Updated' });
                } else {
                    handleError.errorResponse(res, "Not Found", 404, true)
                }
            });
        }
    })
}

module.exports = {updateCustomer}