import Transaction from "../models/Transaction.js";

export const createTransaction = async (transactionData) => {
    const transaction = new Transaction(transactionData);
    return await transaction.save();
}

export const getTransactions = async () => {
    return await Transaction.find();
}