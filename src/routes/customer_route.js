const express = require("express");
const router = express.Router();
const customer_service = require("../service/customer_service")
const url = `/customers/v1`

// Routes: 

router.get(`${url}/all`, customer_service.getAllCustomers)
router.get(`${url}/:id`, customer_service.getCustomerById);
router.get(`${url}/all/sorted`, customer_service.getAllCustomersSortedByAvailableCredit)
router.post(`${url}/create`, customer_service.createNewCustomer);
router.post(`${url}/credit/insert/:customer_id`, customer_service.insertAvailableCredit)
router.put(`${url}/update/:id`, customer_service.updateCustomer);
router.delete(`${url}/delete/:id`, customer_service.deleteCustomerById);

module.exports = router;