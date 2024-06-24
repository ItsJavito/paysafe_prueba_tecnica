import { useState, useContext, createContext } from 'react';
import { fetchTransactionsByFilters } from '../services/transactionService.jsx';

const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);

    const fetchAndSetTransactions = async (filters) => {
        try {
            const transactions = await fetchTransactionsByFilters(filters);
            setTransactions(transactions);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    return (
        <TransactionsContext.Provider value={{ transactions, fetchAndSetTransactions }}>
            {children}
        </TransactionsContext.Provider>
    );
};

export const useTransactions = () => {
    return useContext(TransactionsContext);
};
