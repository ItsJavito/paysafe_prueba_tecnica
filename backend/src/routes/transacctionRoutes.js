const express = require('express');
const transactionController = require('../controllers/transactionController');
const router = express.Router();

router.post('/transactions', transactionController.createTransaction);
router.get('/transactions', transactionController.getTransactions);

module.exports = router;
