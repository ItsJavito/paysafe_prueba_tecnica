const Transaction = require('../models/Transaction');

exports.createTransaction = async (transactionData) => {
    const transaction = new Transaction(transactionData);
    return await transaction.save();
}

exports.getTransactions = async () => {
    return await Transaction.find();
}