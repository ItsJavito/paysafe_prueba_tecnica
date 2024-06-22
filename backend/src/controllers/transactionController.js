const joi = require('joi');
const transactionService = require('../services/transactionService');

const transactionSchema = joi.object({
    transactionId: joi.string().required(),
    userId: joi.string().required(),
    amount: joi.number().required(),
    paymentMethod: joi.string().required(),
    currency: joi.string().required(),
    description: joi.string(),
    status: joi.string().required(),
    statusDetails: joi.string(),
    date: joi.date(),
});

exports.createTransaction = async (req, res, next) => {
    const { error } = transactionSchema.validate(req.body);
    if (error) 
        return res.status(400).json({ error: error.details[0].message });
    try {
        const transaction = await transactionService.createTransaction(req.body);
        res.status(201).json({ status: 'success', data: transaction, message: 'Transaction created successfully' });
    }
    catch (err){
        next(err);
    }
};

exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await transactionService.getTransactions();
        res.status(200).json({ status: 'success', data: transactions, message: 'Transactions retrieved successfully' });
    } catch (err) {
        next(err);
    }
};