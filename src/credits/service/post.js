const mySqlConnection = require("../../configurations/databaseConfiguration")
const handleError = require("../../exceptions/handleErrors")
const utils = require("../../util/customers_util")

const insertCredit = (req, res) => {
    const { available_customer_credit } = req.body;
    const { customer_id } = req.params
    const query = `INSERT INTO available_credit (available_customer_credit, customer_id) values ("${available_customer_credit}", "${customer_id}");`;
    utils.getCustomer(customer_id).then(customer => {
        if (customer.length === 0) {
            handleError.errorResponse(res, `El cliente con id ${customer_id} no ha sido encontrado en la base de datos.`, 404, true)
            return
        } else {
            utils.getCustomerCredit(customer_id).then((customer_credit) => {
                if (customer_credit.length === 0) {
                    mySqlConnection.query(query, [available_customer_credit, customer_id], (err, rows, fields) => {
                        if (!err) {
                            res.status(200).json({ message: "Customer's available credit has been inserted correctly" });
                        } else {
                            handleError.errorResponse(res, "Not Found", 404, true)
                        }
                    });
                }
                else {
                    handleError.errorResponse(res, `El cliente ya tiene un crédito disponible de $ ${customer_credit[0].available_customer_credit}. Por favor si esto no es correcto, actualícelo.`, 404, true)
                }
            })
        }
    })
}

module.exports = {insertCredit}