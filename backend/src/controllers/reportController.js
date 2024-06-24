import { Parser } from 'json2csv';
import * as transactionService from '../services/transactionService.js';

export const generateReport = async (req, res, next) => {
    const { status } = req.query;

    try {
        const filters = {};

        if (status) filters.status = status;
        else return res.status(400).json({ message: 'Status is required' });    
        
        const transactions = await transactionService.getTransactionsByFilters(filters);

        if (transactions.length === 0) {
            return res.status(404).json({ message: 'No transactions found' });
        }

        const fields = ['transactionId', 'userId', 'amount', 'paymentMethod', 'currency', 'description', 'status', 'statusDetails', 'date'];
        const json2csvParser = new Parser({ fields });
        const csv = json2csvParser.parse(transactions);

        res.header('Content-Type', 'text/csv');
        res.attachment('transactions_report.csv');
        res.send(csv);
    } catch (err) {
        next(err);
    }
};
