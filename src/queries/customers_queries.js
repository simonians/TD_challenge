const customersQueries = {
    getAll:() => 'SELECT * FROM customers',
    getCustomerById: (id) => `SELECT * FROM customers WHERE id = ${id}`,
    getAllCustomersSorted: () => `SELECT available_credit.available_customer_credit as "Available credit", customers.name as "Name", customers.last_name as "Last Name" 
    FROM available_credit 
    INNER JOIN customers ON available_credit.customer_id = customers.id
    ORDER BY available_customer_credit ASC;`,
    createCustomer: (name, lastname) => `INSERT INTO customers (name,last_name) values ("${name}", "${lastname}");`,
    updateCustomer: (nameToUpdate, lastnameToUpdate, id) => {
        if (typeof nameToUpdate !== "undefined") {
            return `UPDATE customers SET name = "${nameToUpdate}" WHERE customers.id=${id};`
        } else if (typeof lastnameToUpdate !== "undefined") {
            return `UPDATE customers SET last_name = "${lastnameToUpdate}" WHERE customers.id=${id};`
        } else {
            return `UPDATE customers SET name = "${nameToUpdate}", last_name = "${lastnameToUpdate}" WHERE customers.id=${id};`
        }
    },
    deleteCustomer: (id) => `DELETE FROM customers WHERE id = ${id} `
}

module.exports = {customersQueries}
