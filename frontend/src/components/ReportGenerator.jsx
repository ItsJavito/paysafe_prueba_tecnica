import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

const ReportGenerator = () => {
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setStatus(e.target.value);
    };

    const handleGenerateReport = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/reports/transactions', {
                params: { status },
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'transactions_report.csv');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error generating report:', error);
        }
    };

    return (
        <Container>
            <Form className='m-2'>
                <Form.Group controlId="status">
                    <Form.Label>Estados:</Form.Label>
                    <Form.Control as="select" value={status} onChange={handleChange}>
                        <option value="">Select Status</option>
                        <option value="procesando">Procesando</option>
                        <option value="rechazado">Rechazado</option>
                        <option value="pago cancelado">Pago Cancelado</option>
                        <option value="completada">Completada</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" onClick={handleGenerateReport}>
                    Aceptar
                </Button>
            </Form>
        </Container>
    );
};

export default ReportGenerator;
