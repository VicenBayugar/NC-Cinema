import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Table, Col, Card } from 'react-bootstrap';

const Profile = () => {
  const navigate = useNavigate();

  const [data, setData] = useState();

  useEffect(() => {
    const obtenerUser = async () => {
      const data = await fetch(`http://localhost:3005/api/users/${idUser}`);
      const userObtenidas = await data.json();
      setData(userObtenidas);
    };
    obtenerUser();
  }, []);

  let idUser = sessionStorage.getItem('id');
  let token = sessionStorage.getItem('token');
  let role = sessionStorage.getItem('role');
  let pelicula = sessionStorage.getItem('pelicula') || 'No compraste nada gil';
  let butaca = sessionStorage.getItem('butaca') || ' 0';
  let day = sessionStorage.getItem('day');
  let schedule = sessionStorage.getItem('schedule');

  return (
    <>
      {!token && <Navigate to={'/login'} />}
      {token && role === 'admin"' && <Navigate to={'/dashboard'} />}
      {data && (
        <Container>
          <Row className="row-tittle text-center">
            <h2 className="mt-5">Perfil</h2>
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
                  <Card.Header>Sala</Card.Header>
                  <Card.Body>
                    <Card.Title className="mb-4">{pelicula}</Card.Title>
                    <Card.Text>
                      <i className="bi bi-calendar3 fs-5 pe-1"></i>
                      {day}
                    </Card.Text>
                    <Card.Text>
                      <i className="bi bi-stopwatch fs-5 pe-1"></i>
                      {schedule}
                    </Card.Text>
                    <Card.Text>
                      <i className="bi bi-geo-alt fs-5 pe-1"></i>Butaca:
                      {` ${butaca}`}
                    </Card.Text>
                    <Button variant="primary">Seguir comprando</Button>
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
