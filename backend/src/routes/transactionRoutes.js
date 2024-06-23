import express from 'express';
import {createTransaction, getTransactions, getTransactionsByFilters} from '../controllers/transactionController.js';
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Transaction:
 *       type: object
 *       required:
 *         - transactionId
 *         - userId
 *         - amount
 *         - paymentMethod
 *         - currency
 *         - status
 *         - date
 *       properties:
 *         transactionId:
 *           type: string
 *           description: The unique ID of the transaction
 *         userId:
 *           type: string
 *           description: The ID of the user making the transaction
 *         amount:
 *           type: number
 *           description: The amount of the transaction
 *         paymentMethod:
 *           type: string
 *           description: The payment method used for the transaction
 *         currency:
 *           type: string
 *           description: The currency of the transaction
 *         description:
 *           type: string
 *           description: A description of the transaction
 *         status:
 *           type: string
 *           description: The status of the transaction
 *         statusDetails:
 *           type: string
 *           description: Additional details about the status of the transaction
 *         date:
 *           type: string
 *           format: date-time
 *           description: The date and time when the transaction was created
 *       example:
 *         transactionId: TID123456
 *         userId: user1
 *         amount: 100.50
 *         paymentMethod: credit card
 *         currency: USD
 *         description: Test transaction
 *         status: processing
 *         statusDetails: Awaiting payment
 */

/**
 * @swagger
 * /transactions:
 *   post:
 *     summary: Create a new transaction
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transaction'
 *     responses:
 *       201:
 *         description: Transaction created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaction'
 *       400:
 *         description: Bad request
 */
router.post('/transactions', createTransaction);

/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: Get all transactions
 *     tags: [Transactions]
 *     responses:
 *       200:
 *         description: List of transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Transaction'
 */
router.get('/transactions', getTransactions);

/**
 * @swagger
 * /transactions/filter:
 *   get:
 *     summary: Get transactions by filters
 *     tags: [Transactions]
 *     parameters:
 *       - in: query
 *         name: transactionId
 *         schema:
 *           type: string
 *         description: The ID of the transaction
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         description: The ID of the user
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [procesando, rechazado, pago cancelado, completada]
 *         description: The status of the transaction
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Start date for the date range
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         description: End date for the date range
 *     responses:
 *       200:
 *         description: Filtered transactions retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Transaction'
 */
router.get('/transactions/filter', getTransactionsByFilters);

export default router;
