import joi from 'joi';
import * as transactionService from '../services/transactionService.js';
import { TRANSACTION_STATUSES } from '../../constants/transactionStatus.js';

const transactionSchema = joi.object({
    transactionId: joi.string().required(),
    userId: joi.string().required(),
    amount: joi.number().required(),
    paymentMethod: joi.string().required(),
    currency: joi.string().required(),
    description: joi.string(),
    status: joi.string().valid(...Object.values(TRANSACTION_STATUSES)).required(),
    statusDetails: joi.string(),
});

export const createTransaction = async (req, res, next) => {
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

export const getTransactions = async (req, res, next) => {
    try {
        const transactions = await transactionService.getTransactions();
        res.status(200).json({ status: 'success', data: transactions, message: 'Transactions retrieved successfully' });
    } catch (err) {
        next(err);
    }
};