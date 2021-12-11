// Genero la conexión con mySQL
const mySqlConnection = require("../configurations/databaseConfiguration")
const handleError = require("../exceptions/handleErrors")
const utils = require("../util/customers_util")

exports.getAllCustomers = (req, res) => {
    mySqlConnection.query('SELECT * FROM customers', (err, rows, fields) => {
        if (!err) {
            rows.length > 0 ? res.status(200).json(rows) : handleError.errorResponse(res, "No hay clientes cargados aún", 400, true);
        }
        else {
            handleError.errorResponse(res,"Not Found", 404, true)
        }
    }
    ) 
}

exports.getCustomerById = (req, res) => {
    const { id } = req.params;
    mySqlConnection.query('SELECT * FROM customers WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            rows.length > 0 ? res.status(200).json(rows[0]) : handleError.errorResponse(res, `No hay ningún cliente con id ${id}`, 400, true);
        } else {
            handleError.errorResponse(res,"Not Found", 404, true)
        }
    });
}


exports.deleteCustomerById = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM customers WHERE id = ?';
    utils.getCustomer(id).then(rows => {
        if(rows.length === 0){
            handleError.errorResponse(res, `No hay ningún cliente con id ${id} en la base de datos`, 400, true);
            return;
        }
        mySqlConnection.query(query, [id], (err, rows, fields) => {
            if (!err) {
                res.status(200).json({ message: 'Customer Deleted' });
            } else {
                handleError.errorResponse(res,"Not Found", 404, true)
            }
        });

    })
}


exports.createNewCustomer = (req, res) => {
    const { name, lastname } = req.body;
    const query = `INSERT INTO customers (name,last_name) values ("${name}", "${lastname}");`;
    mySqlConnection.query(query, [ name, lastname], (err, rows, fields) => {
        if (!err) {
            res.status(200).json({message: "Customer Saved"});
        } else {
            handleError.errorResponse(res,"Not Found", 404, true)
        }
    });
}

exports.updateCustomer = (req, res) => {
    const { name, lastname } = req.body;
    const { id } = req.params;
    let query = "";
    if (typeof name !== "undefined") {
        query = `UPDATE customers SET name = "${name}" WHERE customers.id=${id};`
    } else if (typeof lastname !== "undefined"){
        query = `UPDATE customers SET last_name = "${lastname}" WHERE customers.id=${id};`
    } else {
        query = `UPDATE customers SET name = "${name}", last_name = "${lastname}" WHERE customers.id=${id};`
    }
    mySqlConnection.query(query, [ name, lastname], (err, rows, fields) => {
        if (!err) {
            res.status(200).json({ message: 'Customer Updated' });
        } else {
            handleError.errorResponse(res,"Not Found", 404, true)
        }
    });
}

