exports.getCustomer = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM customers WHERE id = ?';
        mySqlConnection.query(query, [id], (err, rows, fields) => {
            resolve(rows)
        });
    })
}