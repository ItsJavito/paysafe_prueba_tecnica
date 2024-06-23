import "dotenv/config";
import mongoose from "mongoose";
import Transaction from "../src/models/Transaction.js";
import { STATUS_LIST } from "../constants/transactionStatus.js";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed", error);
        process.exit(1);
    }
};

const seedTransactions = async () => {
    const statuses = ["procesando", "rechazado", "pago cancelado", "completada"];
    const transactions = [];

    for (let i = 0; i < 30; i++) {
        const transaction = {
            transactionId: `TID${i}`,
            userId: `user${Math.floor(i / 10)}`,
            amount: Math.random() * 1000,
            paymentMethod: "credit card",
            currency: "USD",
            description: `Test transaction ${i}`,
            status: STATUS_LIST[i % STATUS_LIST.length],
            statusDetails: `Details for transaction ${i}`,
            date: new Date(),
        };
        transactions.push(transaction);
    }

    await Transaction.insertMany(transactions);
    console.log("Transactions seeded successfully");
};

const runSeed = async () => {
    await connectDB();
    await seedTransactions();
    mongoose.connection.close();
};

runSeed();
