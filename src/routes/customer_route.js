const express = require("express");
const router = express.Router();
const customer_service = require("../service/customer_service")
const url = `/customers/v1`

// GET all customers
router.get(`${url}/all`, customer_service.getAllCustomers)

// GET A customer
router.get(`${url}/:id`, customer_service.getCustomerById);

// DELETE An Employee
router.delete(`${url}/delete/:id`, customer_service.deleteCustomerById);

// INSERT A Customer
router.post(`${url}/create`, customer_service.createNewCustomer);

// Update a customerData
router.put(`${url}/update/:id`, customer_service.updateCustomer);

// INSERT A available customer credit
router.post(`${url}/credit/insert/:customer_id`, customer_service.insertAvailableCredit)

// Get all customers order by available credit
router.get(`${url}/all/sorted`, customer_service.getAllCustomersSortedByAvailableCredit)


module.exports = router;