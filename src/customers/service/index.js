const { createCustomer } = require('./create');
const { deleteCustomer } = require('./delete');
const { updateCustomer } = require('./update');
const { get } = require('./get');


module.exports = {
    deleteCustomer,
    createCustomer,
    updateCustomer,
    get
};