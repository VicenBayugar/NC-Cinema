import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import LoginImg from '/img/loginBGimage.jpeg';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import sweetAlert from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const endpoint = 'http://localhost:3005/api/users/login';
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email);
    console.log(password);
    const filter =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    //comparo que los campos mo esten vacios
    if (email === '' || password === '') {
      sweetAlert({ title: 'Campos vacios', icon: 'error' });
      return;
    }
    //comparo que el correo sea válido
    if (email !== '' && !filter.test(email)) {
      sweetAlert({ title: 'Correo no válido', icon: 'error' });
      return;
    }

    //envio peticion para consultar si el usuario esta registrado
    await axios
      .post(endpoint, {
        email: email,
        password: password,
      })
      //recibimoy y guardamos el token en el sessionStrorge del navegador
      //y nos redirige a la ultima ubicacion
      .then(res => {
        const tokenRecibido = res.data.token;
        sessionStorage.setItem('token', tokenRecibido);
        navigate(-1);
      })
      .catch(error => {
        sweetAlert({ title: 'El usuario no existe', icon: 'error' });
      });
  };
  let token = sessionStorage.getItem('token');

  return (
    <>
      {/**si tengo ek token el logo de usuario me dirige a la pagina profile donde el usuario puede ver sus compras */}
      {token && <Navigate to={'/profile'} />}
      <Container className="">
        <Row>
          <Col
            lg={6}
            className="d-flex flex-column justify-content-center align-items-center pb-4 pt-4">
            <h1 className="f-inter text-center fs-1 fw-bold lh-sm c-primary h1">
              INICIAR SESIÓN
            </h1>
            <p className="fs-6 mb-4 p">
              Si aún no tienes cuenta{' '}
              <Link to="/register" className="registrate">
                regístrate aqui
              </Link>
            </p>
            <Form onSubmit={handleSubmit} method="POST">
              <Form.Group className="mb-3 w-100">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  autoComplete="username"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  autoComplete="current-password"
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
            <img className="img" src={LoginImg} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
