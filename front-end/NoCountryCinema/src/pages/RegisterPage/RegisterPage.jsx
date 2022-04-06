import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import RegisterImg from '/img/register-img.png';

export default function RegisterPage() {
  const labelsForm = [
    {
      labelForm: 'Nombre',
      placeholderForm: 'Ingresa tu nombre',
      typeForm: 'text',
    },
    {
      labelForm: 'Apellido',
      placeholderForm: 'Ingresa tu apellido',
      typeForm: 'text',
    },
    {
      labelForm: 'Correo electrónico',
      placeholderForm: 'Ingresa tu correo electrónico',
      typeForm: 'email',
    },
    {
      labelForm: 'Contraseña',
      placeholderForm: 'Ingresa tu contraseña',
      typeForm: 'password',
    },
    {
      labelForm: 'Confirma tu contraseña',
      placeholderForm: 'ingresa tu contraseña',
      typeForm: 'password',
    },
  ];

  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col lg={5} className="pt-5">
          <h1 className="f-inter text-center fs-1 fw-bold lh-sm c-primary">
            ÚNETE
          </h1>
          <p className="fs-6 mb-4">Regístrate y podrás comprar en línea </p>
          <Form>
            {labelsForm.map(({ labelForm, placeholderForm, typeForm }) => (
              <Form.Group className="mb-4" controlId="" key={labelForm}>
                <Form.Label>{`${labelForm} *`}</Form.Label>
                <Form.Control
                  className="border-c-primary"
                  type={typeForm}
                  placeholder={placeholderForm}
                  required
                />
              </Form.Group>
            ))}
            <Form.Group className="mb-4">
              <Form.Label>Tipo de Documento</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="border-c-primary">
                <option>Selecciona tu tipo de documento</option>
                <option value="1">DNI</option>
                <option value="2">Pasaporte</option>
                <option value="2">Carnet de Extranjería</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>N° de documento</Form.Label>
              <Form.Control
                className="border-c-primary"
                type="number"
                placeholder="Ingresa tu N° de documento"
              />
            </Form.Group>
            <Form.Group className="mt-5" controlId="">
              <Form.Check
                className="fs-6"
                type="checkbox"
                label="DESEO RECIBIR MAILS ESTRENOS Y PROMOCIONES."
              />
            </Form.Group>
            <Button
              className="mt-5 button-primary w-100 f-inter fw-bold"
              type="submit">
              REGISTRARSE
            </Button>
          </Form>
        </Col>
        <Col lg={7} className="text-end">
          <img src={RegisterImg} />
        </Col>
      </Row>
    </Container>
  );
}
