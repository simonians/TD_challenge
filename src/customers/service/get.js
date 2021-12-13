const mySqlConnection = require("../../configurations/databaseConfiguration")
const handleError = require("../../exceptions/handleErrors")
const queries = require("../../queries/customers_queries").customersQueries;

const get = (req, res) => {
    const query = queries.getAll();
    mySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            rows.length > 0 ? res.status(200).json(rows) : handleError.errorResponse(res, "No hay clientes cargados aún", 400, true);
        }
        else {
            handleError.errorResponse(res, "Not Found", 404, true)
        }
    }
    )


    /* const {id, sort} = req.params;
    const idUndefined = typeof id == "undefined";
    const sorted = typeof sort == "undefined";
    console.log("id --> " + idUndefined)
    console.log("asc -->" + sorted)
    

    if (idUndefined && sorted) {
        const query = queries.getAll;
        mySqlConnection.query(query, (err, rows, fields) => {
            if (!err) {
                rows.length > 0 ? res.status(200).json(rows) : handleError.errorResponse(res, "No hay clientes cargados aún", 400, true);
            }
            else {
                handleError.errorResponse(res, "Not Found", 404, true)
            }
        }
        )
        return;
    }


    if (!idUndefined) {
        const query = queries.getCustomerById(id);
        mySqlConnection.query(query, [id], (err, rows, fields) => {
            if (!err) {
                rows.length > 0 ? res.status(200).json(rows[0]) : handleError.errorResponse(res, `No hay ningún cliente con id ${id}`, 400, true);
            } else {
                handleError.errorResponse(res, "Not Found", 404, true)
            }
        });
        return;
    } 
    else if (!typeId){
        const query = sort==="1" ? queries.getAllCustomersSorted("asc") : queries.getAllCustomersSorted("desc");
        mySqlConnection.query(query, (err, rows, fields) => {
            if (!err) {
                rows.length > 0 ? res.status(200).json(rows) : handleError.errorResponse(res, "No hay clientes cargados aún", 400, true);
            }
            else {
                handleError.errorResponse(res, "Not Found", 404, true)
            }
        })
        return;
    }  */

}

module.exports = { get }