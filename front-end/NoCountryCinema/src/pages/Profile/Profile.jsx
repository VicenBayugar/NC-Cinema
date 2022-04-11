import React from 'react';
import { Container, Row, Table, Col, Card, Button } from 'react-bootstrap';

const Profile = () => {
  return (
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
                  <td>Vicente</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Apellido: </td>
                  <td>Bayúgar</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Correo electrónico: </td>
                  <td>vicentebayugar@gmail.com</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Tipo de documento: </td>
                  <td>DNI</td>
                  <td></td>
                </tr>
                <tr>
                  <td>N° de documento: </td>
                  <td>12345678</td>
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
                  <i class="bi bi-calendar3 fs-5 pe-1"></i>Hoy, 11 de Abril,
                  2022
                </Card.Text>
                <Card.Text>
                  <i class="bi bi-stopwatch fs-5 pe-1"></i>6:00 pm
                </Card.Text>
                <Card.Text>
                  <i class="bi bi-geo-alt fs-5 pe-1"></i>Ubicaciones: P-6, P-7
                </Card.Text>
                <Button variant="primary">Cambiar ubicación</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2D - DOBLADA</Card.Footer>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
