const express = require("express");
const router = express.Router();
const {
    createCustomer,
    deleteCustomer,
    updateCustomer,
    get
} = require('./service');

const url = `/customers/v1`

// Routes: 

router.get(`${url}/`, get)
router.get(`${url}/:id`, get)
router.get(`${url}/sort/:sortedType`, get)
router.post(`${url}/`, createCustomer);
router.put(`${url}/:id`, updateCustomer);
router.delete(`${url}/:id`, deleteCustomer); 

module.exports = router;