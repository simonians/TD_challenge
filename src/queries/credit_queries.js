const creditQueries = {
    insertCredit: (available_customer_credit, customer_id) => `INSERT INTO available_credit (available_customer_credit, customer_id) values ("${available_customer_credit}", "${customer_id}");`
}

module.exports = {creditQueries}