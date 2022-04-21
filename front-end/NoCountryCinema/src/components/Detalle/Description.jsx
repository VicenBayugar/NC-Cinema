import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import axios from 'axios';
import './detail.css';
import ReactPlayer from 'react-player';
import { useNavigate, Link } from 'react-router-dom';
import Butaca from './Butacas';
import sweetAlert from 'sweetalert';

const Description = ({ movie }) => {
  const navigate = useNavigate();
  const title = movie.title;
  const day = movie.day;
  const schedule = movie.schedule;
  const butacas = movie.butacas;
  const [butacaElegida, setBucataElegida] = useState({});
  const [butacasDisponibles, setButacasDisponibles] = useState([]);

  const idUser = sessionStorage.getItem('id') || null;

  const handlerButaca = butaca => {
    const butaquita = butacasDisponibles.find(butac => butac == butaca);
    if (butaquita) {
      if (butaquita == butacaElegida) {
        butacaElegida.state = false;
        setBucataElegida({});
      } else {
        butacaElegida.state = false;
        butaquita.state = true;
        setBucataElegida(butaquita);
      }
    } else {
      null;
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();

    if (butacaElegida.state != false && butacaElegida.state != true) {
      sweetAlert({ title: 'Debes seleccionar una butaca', icon: 'error' });
    } else {
      try {
        await axios.put(
          `https://nocountry-c4g17-api.herokuapp.com/api/movies/${title}/butacas`,
          {
            number: butacaElegida.number,
          },
          sessionStorage.setItem('butaca', butacaElegida.number),
          sessionStorage.setItem('pelicula', title),
          sessionStorage.setItem('day', day),
          sessionStorage.setItem('schedule', schedule),
          sweetAlert({ title: '¡Butaca comprada con éxito!', icon: 'success' }),
          setTimeout(() => {
            navigate('/profile');
          }, 2000),
        );
      } catch (e) {}
    }
  };

  useEffect(() => {}, [butacaElegida]);

  return (
    <>
      {movie && (
        <Container>
          <Row className="contenedor">
            <ReactPlayer
              url={movie.trailer}
              width="100%"
              height="100%"
              controls
              className="player"
            />
          </Row>
          <Row className="row-tittle">
            <h2>{movie.title} </h2>
          </Row>
          <Row>
            <Col xl={6} className="d-flex justify-content-center pb-4 pt-4">
              <img src={movie.image} className="img-fluid" alt="imagenPeli" />
            </Col>
            <Col xl={6}>
              <Row>
                <h3>Sinopsis</h3>
                <p>{movie.resume}</p>
              </Row>
              <Row>
                <Table striped hover variant="dark">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>Director: </td>
                      <td>{movie.director}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Origen: </td>
                      <td>{movie.origin}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Reparto: </td>
                      <td>{movie.actors}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Género: </td>
                      <td>{movie.genre}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Duracion: </td>
                      <td>{movie.length} Minutos</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Idiomas: </td>
                      <td className="col-5">
                        {movie.language.map((mov, idx) => {
                          return (
                            <p id="p" key={idx}>
                              {mov}
                            </p>
                          );
                        })}
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Disponible: </td>
                      <td id="disponible">2D</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Día: </td>
                      <td id="disponible">{day}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Horario: </td>
                      <td id="disponible">{schedule} hs</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Col>
          </Row>

          {idUser && movie.premiere == false ? (
            <>
              <div className="container">
                <div className="row">
                  <Row>
                    <Col xl={12} className="px-0">
                      <div className="sala-container">
                        <div className="pantalla-container">
                          <p className="pantalla-texto">PANTALLA</p>
                        </div>
                        <div className="butaca-container">
                          <div className="butaca-fila">
                            {butacas.map(butaca => (
                              <Butaca
                                key={butaca._id}
                                number={butaca.number}
                                className={`${butaca.state} `}
                                handlerButaca={handlerButaca}
                                butaca={butaca}
                                setButacasDisponibles={setButacasDisponibles}
                                butacas={butacas}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <Container className="text-center mb-2 mt-5">
                <Button onClick={handleSubmit}>Comprar</Button>
              </Container>
            </>
          ) : movie.premiere == false ? (
            <h3 className="text-center mt-5 mb-5 ">
              Para comprar la entrada debes{' '}
              <Link to="/login" className="text-decoration-none link-sesion">
                iniciar sesión
              </Link>
            </h3>
          ) : (
            <h3 className="text-center">Proximamente...</h3>
          )}
        </Container>
      )}
    </>
  );
};

export default Description;
