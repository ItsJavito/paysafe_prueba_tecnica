import mongoose from "mongoose";
import { TRANSACTION_STATUSES } from "../../constants/transactionStatus.js";

const transactionSchema = new mongoose.Schema({
    transactionId: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        required: true,
        enum: Object.values(TRANSACTION_STATUSES)
    },
    statusDetails: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;