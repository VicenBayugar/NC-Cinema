import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import LoginImg from '/img/loginBGimage.jpeg';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container className=''>
      <Row>
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center pb-4 pt-4">
          <h1 className="f-inter text-center fs-1 fw-bold lh-sm c-primary h1">
            INICIAR SESIÓN
          </h1>
          <p className="fs-6 mb-4 p">
            Si aún no tienes cuenta{' '}
            <Link to="/register" className='registrate'>
              regístrate aqui
            </Link>
          </p>
          <Form>
            <Form.Group
              className="mb-3 w-100"
              controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 w-100"
              controlId="exampleForm.ControlInput1">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              className="w-100 mt-4 f-inter fw-bold button-primary"
              variant="primary"
              type="submit">
              INICIAR SESIÓN
            </Button>
          </Form>
        </Col>
        <Col lg={6} className="right-side d-flex justify-content-center">
          <img  className = "img"src={LoginImg} />
        </Col>
      </Row>
    </Container>
  );
};
