import React from 'react';
import { Table } from 'react-bootstrap';
import { useTransactions } from '../hooks/useTransactions.jsx';

const TransactionTable = () => {
    const { transactions } = useTransactions();

    return (
        <Table striped bordered hover className="mt-4">
            <thead>
                <tr>
                    <th>ID Transacción</th>
                    <th>ID Usuario</th>
                    <th>Monto</th>
                    <th>Método de pago</th>
                    <th>Moneda</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                    <th>Detalle de estado</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.transactionId}>
                        <td>{transaction.transactionId}</td>
                        <td>{transaction.userId}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.paymentMethod}</td>
                        <td>{transaction.currency}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.status}</td>
                        <td>{transaction.statusDetails}</td>
                        <td>{new Date(transaction.date).toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TransactionTable;
