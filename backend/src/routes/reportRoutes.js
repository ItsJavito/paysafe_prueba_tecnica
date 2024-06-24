import express from 'express';
import { generateReport } from '../controllers/reportController.js';

const router = express.Router();

/**
 * @swagger
 * /api/reports/transactions:
 *   get:
 *     summary: Generate a report of transactions
 *     tags: [Reports]
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [procesando, rechazado, pago cancelado, completada]
 *         description: The status of the transactions
 *     responses:
 *       200:
 *         description: CSV report of transactions
 *         content:
 *           text/csv:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: No transactions found
 */
router.get('/transactions', generateReport);

export default router;
