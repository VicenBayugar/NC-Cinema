import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import AlertMessage from '../../components/AlertMessage/AlertMessage';
import RegisterImg from '/img/register-img.png';
import axios from 'axios';


const regexEmail =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  
// array para crear dinámicamente los inputs del formulario
const formFields = [
  {
    labelForm: 'Nombre',
    placeholderForm: 'Ingresa tu nombre',
    typeForm: 'text',
    name: 'name',
    validate: str => {
      if (str.length <= 2) {
        return 'Nombre debe contener más de 2 caracteres';
      }
    },
  },
  {
    labelForm: 'Apellido',
    placeholderForm: 'Ingresa tu apellido',
    typeForm: 'text',
    name: 'lastname',
    validate: str => {
      if (str.length <= 2) {
        return 'Apellido debe contener más de 2 caracteres';
      }
    },
  },
  {
    labelForm: 'Correo electrónico',
    placeholderForm: 'Ingresa tu correo electrónico',
    typeForm: 'email',
    name: 'email',
    validate: str => {
      if (!regexEmail.test(str)) {
        return 'El email no es válido';
      }
    },
  },
  {
    labelForm: 'Contraseña',
    placeholderForm: 'Ingresa tu contraseña',
    typeForm: 'password',
    name: 'password',
    validate: str => {
      if (str.length <= 3) {
        return 'Ingresa una contraseña válida, debe tener al menos 4 caracteres';
      }
    },
  },
];

//iteramos formFields para extraer el key:'name', para luego convertirlo en objeto y asignarle un string vacio (todo esto para hacer dinámico el valor del estado inicial de los inputs del formulario)
const formFieldInitialValues = formFields
  .map(({ name }) => name)
  .reduce(
    (obj, key) => ({ ...obj, [key]: '', documentNumber: '', documentType: '' }),
    {},
  );

const validateDocument = str => {
  if (str.length < 8) {
    return 'Debe tener 8 caracteres';
  }
};

export default function RegisterPage() {

  const navigate = useNavigate();
  const [form, setForm] = useState(formFieldInitialValues);
  const [formErrors, setFormErrors] = useState(formFieldInitialValues);
  const [state, setState] = useState({
    status: '',
    error: '',
  });

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setState({ status: 'pending', error: '' });
    try {
      await axios.post('http://localhost:3005/api/users/createUser', {
        name: form.name,
        last_name: form.lastname,
        email: form.email,
        password: form.password,
        documento: form.documentNumber,
        typeDoc: form.documentType,

      })
      setState({ status: 'success', error: '' });
      // console.log(response);

    } catch (e) {
      // console.log(e.response.data.errors.documento.msg);
      // console.log(e.response.data.msg);
      // console.log(e.response.data.errors.name.msg);

      if (e.response.data.msg) {
        setState({ status: 'rejected', error: e.response.data.msg });
        return;
      }
      const formattedError = Object.values(e.response.data.errors || {}).map(
        i => <p>{i.msg}</p>,
      );
      setState({ status: 'rejected', error: formattedError });
    } finally {
      // setState({ status: '', error: '' });

    }
    //redireccionamiento hacia el login usando el hook useNavigate de React router DOM
    navigate('/login')
  };

  const isLoading = state.status === 'pending';
  const isSuccess = state.status === 'success';
  const isError = state.status === 'rejected';

  const errorExist =
    Object.values(formErrors).some(i => i !== '') ||
    form.documentNumber === '' ||
    form.documentType === '';

  console.log({ formErrors });

  return (
    <Container className="d-flex justify-content-center flex-column">
      <Row>
        <Col
          lg={5}
          className="pt-3 pb-3 d-flex flex-column align-items-center justify-content-center">
          <h1 className="f-inter text-center fs-1 fw-bold lh-sm c-primary">
            ÚNETE
          </h1>
          <p className="fs-6 mb-4">Regístrate y podrás comprar en línea </p>
          <Form onSubmit={handleSubmit}>
            {formFields.map(
              ({ labelForm, placeholderForm, typeForm, name, validate }) => (
                <Form.Group className="mb-4" controlId={name} key={labelForm}>
                  <Form.Label>{`${labelForm} *`}</Form.Label>
                  <Form.Control
                    isInvalid={formErrors[name]}
                    className="border-c-primary"
                    type={typeForm}
                    name={name}
                    placeholder={placeholderForm}
                    value={form[name]}
                    onChange={handleChange}
                    onBlur={() => {
                      const validateMsg = validate(form[name]);
                      setFormErrors(prev => ({
                        ...prev,
                        [name]: validateMsg ?? '',
                      }));
                    }}
                  />
                  {formErrors[name] ? (
                    <p style={{ color: '#fb4c5c' }}>{formErrors[name]}</p>
                  ) : null}
                </Form.Group>
              ),
            )}
            <Form.Group className="mb-4">
              <Form.Label>Tipo de Documento *</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="border-c-primary"
                name="documentType"
                value={form.documentType}
                onChange={handleChange}>
                <option>Selecciona tu tipo de documento</option>
                <option value="dni">DNI</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="carnet de extranjeria">
                  Carnet de Extranjería
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4" controlId="documentNumber">
              <Form.Label>N° de documento *</Form.Label>
              <Form.Control
                className="border-c-primary"
                type="number"
                name="documentNumber"
                value={form.documentNumber}
                onChange={handleChange}
                placeholder="Ingresa tu N° de documento"
                onBlur={() => {
                  const validateMsg = validateDocument(form.documentNumber);
                  setFormErrors(prev => ({
                    ...prev,
                    documentNumber: validateMsg ?? '',
                  }));
                }}
              />
              {formErrors.documentNumber ? (
                <p style={{ color: '#fb4c5c' }}>{formErrors.documentNumber}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mt-5" controlId="">
              <Form.Check
                className="fs-6"
                type="checkbox"
                label="DESEO RECIBIR MAILS ESTRENOS Y PROMOCIONES."
                required
              />
            </Form.Group>
            {isError ? (
              <AlertMessage variant="danger" message={state.error} />
            ) : null}
            {isSuccess ? (
              <AlertMessage
                variant="success"
                message="Usuario creado exitosamente"
              />
            ) : null}
            <Button
              disabled={errorExist}
              className="mt-5 button-primary w-100 f-inter fw-bold"
              type="submit"
              >
              {isLoading ? 'cargando..' : 'REGISTRARSE'}
              
            </Button>
          </Form>
        </Col>
        <Col lg={7} className="d-flex justify-content-center">
          <img src={RegisterImg} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}
