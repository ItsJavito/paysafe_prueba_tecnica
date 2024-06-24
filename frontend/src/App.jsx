import React from 'react';
import { Container } from 'react-bootstrap';
import TransactionFilterForm from './components/TransactionFilterForm';
import TransactionTable from './components/TransactionTable';
import ReportGenerator from './components/ReportGenerator';

const App = () => {
	return (
		<Container className="my-4">
			<h3> Formulario de transacciones </h3>
			<TransactionFilterForm />
			<TransactionTable />
			<h2> Reporte por estados </h2>
			<ReportGenerator />
		</Container>
	);
};

export default App;
