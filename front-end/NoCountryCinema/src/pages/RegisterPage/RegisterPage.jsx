import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import RegisterImg from '/img/register-img.png';

const formFields = [
  {
    labelForm: 'Nombre',
    placeholderForm: 'Ingresa tu nombre',
    typeForm: 'text',
    name: 'name',
  },
  {
    labelForm: 'Apellido',
    placeholderForm: 'Ingresa tu apellido',
    typeForm: 'text',
    name: 'lastname',
  },
  {
    labelForm: 'Correo electrónico',
    placeholderForm: 'Ingresa tu correo electrónico',
    typeForm: 'email',
    name: 'email',
  },
  {
    labelForm: 'Contraseña',
    placeholderForm: 'Ingresa tu contraseña',
    typeForm: 'password',
    name: 'password',
  },
  {
    labelForm: 'Confirma tu contraseña',
    placeholderForm: 'ingresa tu contraseña',
    typeForm: 'password',
    name: 'repetPassword',
  },
];

const formFieldInitialValues = formFields
  .map(({ name }) => name)
  .reduce((obj, key) => ({ ...obj, [key]: '' }), {});

export default function RegisterPage() {
  const [form, setForm] = useState(formFieldInitialValues);

  function handleChange(e) {
    console.log(e.target);
    console.log(e, 'eee');
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {}

  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col lg={5} className="pt-5">
          <h1 className="f-inter text-center fs-1 fw-bold lh-sm c-primary">
            ÚNETE
          </h1>
          <p className="fs-6 mb-4">Regístrate y podrás comprar en línea </p>
          <Form onSubmit={handleSubmit}>
            {formFields.map(
              ({ labelForm, placeholderForm, typeForm, name }) => (
                <Form.Group className="mb-4" controlId={name} key={labelForm}>
                  <Form.Label>{`${labelForm} *`}</Form.Label>
                  <Form.Control
                    className="border-c-primary"
                    type={typeForm}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholderForm}
                    required
                  />
                </Form.Group>
              ),
            )}
            <Form.Group className="mb-4">
              <Form.Label>Tipo de Documento</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="border-c-primary"
                name="documentType"
                value={form.documentType}
                onChange={handleChange}>
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
                name="documentNumber"
                value={form.documentNumber}
                onChange={handleChange}
                placeholder="Ingresa tu N° de documento"
                required
              />
            </Form.Group>
            <Form.Group className="mt-5" controlId="">
              <Form.Check
                className="fs-6"
                type="checkbox"
                label="DESEO RECIBIR MAILS ESTRENOS Y PROMOCIONES."
                required
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
