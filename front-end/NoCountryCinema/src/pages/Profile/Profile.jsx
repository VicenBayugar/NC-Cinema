import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Table, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  function handlerClick(e) {
    e.preventDefault();
    sessionStorage.clear();
    navigate('/');
  }

  const [data, setData] = useState();
  const idUser = sessionStorage.getItem('id');

  useEffect(() => {
    const obtenerUser = async () => {
      const data = await fetch(`http://localhost:3005/api/users/${idUser}`);
      const userObtenidas = await data.json();
      setData(userObtenidas);
    };
    obtenerUser();
  }, []);

  console.log(data);

  let token = sessionStorage.getItem('token');
  return (
    <>
      {!token && <Navigate to={'/login'} />}
      {data && (
        <Container>
          <Container className="text-end">
            <Button
              style={{
                color: 'whitesmoke',
              }}
              size="xs"
              variant="outline"
              onClick={handlerClick}>
              Cerrar Sesión
            </Button>
          </Container>
          <Row className="row-tittle text-center">
            <h2 className="mt-1">Perfil</h2>
          </Row>
          <Row className="mt-5 mb-5">
            <Col xl={6}>
              <Row className="ps-5 pe-5">
                <h2 className="mb-5 text-center">Información personal</h2>
                <Table striped hover variant="dark">
                  <tbody>
                    <tr>
                      <td>Nombre: </td>
                      <td>{data.user.name}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Apellido: </td>
                      <td>{data.user.last_name}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Correo electrónico: </td>
                      <td>{data.user.email}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Tipo de documento: </td>
                      <td>{data.user.typeDoc.toUpperCase()}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>N° de documento: </td>
                      <td>{data.user.documento}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Método de pago: </td>
                      <td>VISA crédito</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>N° de tarjeta: </td>
                      <td>XXXX XXXX XXXX 1234</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Col>
            <Col xl={6} className="pb-4">
              <Row className="ps-5 pe-5">
                <h2 className="mb-5 text-center">Mis películas:</h2>
                <Card className="text-center bg-dark">
                  <Card.Header>Sala 2</Card.Header>
                  <Card.Body>
                    <Card.Title className="mb-4">Batman</Card.Title>
                    <Card.Text>
                      <i className="bi bi-calendar3 fs-5 pe-1"></i>Hoy, 11 de
                      Abril, 2022
                    </Card.Text>
                    <Card.Text>
                      <i className="bi bi-stopwatch fs-5 pe-1"></i>6:00 pm
                    </Card.Text>
                    <Card.Text>
                      <i className="bi bi-geo-alt fs-5 pe-1"></i>Ubicaciones:
                      P-6, P-7
                    </Card.Text>
                    <Button variant="primary">Cambiar ubicación</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">2D - DOBLADA</Card.Footer>
                </Card>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Profile;
