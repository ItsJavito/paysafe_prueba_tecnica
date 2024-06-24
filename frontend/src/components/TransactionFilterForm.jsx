import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useTransactions } from '../hooks/useTransactions.jsx';

const TransactionFilterForm = () => {
    const [formData, setFormData] = useState({
        transactionId: '',
        userId: '',
        status: '',
        startDate: '',
        endDate: ''
    });

    const { fetchAndSetTransactions } = useTransactions();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchAndSetTransactions(formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="transactionId">
                    <Form.Label>ID Transacción</Form.Label>
                    <Form.Control
                        type="text"
                        name="transactionId"
                        value={formData.transactionId}
                        onChange={handleChange}
                        placeholder="Ingres Id de Transacción"
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="userId">
                    <Form.Label>ID Usuario</Form.Label>
                    <Form.Control
                        type="text"
                        name="userId"
                        value={formData.userId}
                        onChange={handleChange}
                        placeholder="Ingresa ID de Usuario"
                    />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="status">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                        as="select"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona un estado</option>
                        <option value="procesando">Procesando</option>
                        <option value="rechazado">Rechazado</option>
                        <option value="pago cancelado">Pago Cancelado</option>
                        <option value="completada">Completada</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="startDate">
                    <Form.Label>Fecha de inicio</Form.Label>
                    <Form.Control
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="endDate">
                    <Form.Label>Fecha de fin</Form.Label>
                    <Form.Control
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Subir
            </Button>
        </Form>
    );
};

export default TransactionFilterForm;
