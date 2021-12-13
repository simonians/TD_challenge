const express = require("express");
const router = express.Router();
const {
    insertCredit
} = require('./service');

const url = `/credits/v1`


// Routes: 

router.post(`${url}/:customer_id`, insertCredit)


module.exports = router;