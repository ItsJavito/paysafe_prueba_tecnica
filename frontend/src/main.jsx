import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { TransactionsProvider } from './hooks/useTransactions.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<TransactionsProvider>
			<App />
		</TransactionsProvider>
	</React.StrictMode>,
)
