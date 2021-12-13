const { createCustomer } = require('./create');
const { deleteCustomer } = require('./delete');
const { updateCustomer } = require('./update');
const { get } = require('./get');
const { getCustomer } = require("./getCustomer")
const { getCustomersSorted } = require("./getCustomersSorted")


module.exports = {
    deleteCustomer,
    createCustomer,
    updateCustomer,
    get,
    getCustomer,
    getCustomersSorted
};