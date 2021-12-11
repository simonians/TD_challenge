const express = require("express");
const router = express.Router();
const customer_service = require("../service/customer_service")

// GET all customers
router.get("/all", customer_service.getAllCustomers)

// GET A customer
router.get('/:id', customer_service.getCustomerById);

// DELETE An Employee
router.delete('/delete/:id', customer_service.deleteCustomerById);


// INSERT A Customer
router.post('/create', customer_service.createNewCustomer);


// Update a customerData
router.put('/update/:id', customer_service.updateCustomer);


module.exports = router;