import request from 'supertest';
import express from 'express';
import * as chai from 'chai';
import {createTransaction, getTransactions} from '../src/controllers/transactionController.js';
import router from '../src/routes/transactionRoutes.js';

const app = express();
app.use(express.json());
app.use('/transactions', router);

const {expect} = chai;

describe('Transaction Routes', () => {
  it('should create a new transaction', async () => {
    const transactionData = {
      transactionId: "123456",
      userId: "user1",
      amount: 100.50,
      paymentMethod: "credit card",
      currency: "USD",
      description: "Test transaction",
      status: "pending",
      statusDetails: "Awaiting payment"
    };

    const res = await request(app)
      .post('/transactions')
      .send(transactionData);
    expect(res.statusCode).to.equal(201);
    expect(res.body).to.have.property('transactionId', transactionData.transactionId);
    // Aquí van más aserciones según lo que esperas de la respuesta
  });

  it('should get all transactions', async () => {
    const res = await request(app)
      .get('/transactions');
    expect(res.statusCode).to.equal(200);
    // Aquí van más aserciones según lo que esperas de la respuesta
  });
});