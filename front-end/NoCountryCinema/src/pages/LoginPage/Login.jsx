import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import LoginImg from '../../../public/img/loginBGimage.jpeg';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="f-inter text-center fs-1 fw-bold lh-sm c-primary">
            INICIAR SESIÓN
          </h1>
          <p className="fs-6 mb-4">
            Si aún no tienes cuenta{' '}
            <Link to="/register">
              <b>regístrate aqui</b>
            </Link>
          </p>
          <Form>
            <Form.Group
              className="mb-3 w-100"
              controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group
              className="mb-3 w-100"
              controlId="exampleForm.ControlInput1">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button
              className="w-100 mt-4 f-inter fw-bold button-primary"
              variant="primary"
              type="submit">
              INICIAR SESIÓN
            </Button>
          </Form>
        </Col>
        <Col>
          <img src={LoginImg} />
        </Col>
      </Row>
    </Container>
  );
};
