import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import axios from 'axios';
import './detail.css';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import Butaca from './Butacas';
import { Navigate } from 'react-router-dom';


const Description = ({ movie }) => {
  const navigate = useNavigate()
  const title =  movie.title;
  const butacas = movie.butacas;
  const [butacaElegida, setBucataElegida] = useState({});
  const [butacasDisponibles, setButacasDisponibles] = useState([]);
 
 console.log(title);
  
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
  
   
    try {
      await axios.put(`http://localhost:3005/api/movies/${title}/butacas`, {
        number: butacaElegida.number
      },
      navigate("/profile"))
    } catch (e) {
    }  
  };

  useEffect(() => {
    console.log(butacaElegida.number);
  }, [butacaElegida]);

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
                      <td>

                      </td>
                      
                    </tr>
                    <tr>
                      <td>Disponible: </td>
                      <td id="disponible">2D</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Col>
          </Row>
          <div className="container">
            <div className="row">
              <Row>
                <Col xl={6} className="px-0">
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
                <Col xl={6} className="px-0">
                  <Row>
                    <h3 className="mt-5 col-12 d-flex justify-content-center">
                      Horarios
                    </h3>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <Col className="col-2 text-center mt-5 ">
                      <h3 className="border rounded-2 ">2D</h3>
                    </Col>
                    <Row className="d-flex justify-content-center mt-3">
                      <button className="border border-info rounded-3 col-3 m-2 p-2 bg-dark text-white">
                        10:00hs
                      </button>
                      <button className="border border-info rounded-3 col-3 m-2 p-2 bg-dark text-white">
                        13:00hs
                      </button>
                      <button className="border border-info rounded-3 col-3 m-2 p-2 bg-dark text-white">
                        20:00hs
                      </button>
                    </Row>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <Col className="col-2 text-center mt-5 ">
                      <h3 className=" border rounded-3 ">3D</h3>
                    </Col>
                    <Row className="d-flex justify-content-center mt-3">
                      <button className="border border-info rounded-3 col-3 m-2 p-2 bg-dark text-white">
                        16:00hs
                      </button>
                      <button className="border border-info rounded-3 col-3 m-2 p-2 bg-dark text-white">
                        19:00hs
                      </button>
                      <button className="border border-info rounded-3 col-3 m-2 p-2 bg-dark text-white">
                        23:00hs
                      </button>
                    </Row>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
          <Container className="text-center mb-2 mt-5">
            <Button
            onClick={handleSubmit}
            >
              Comprar
            </Button>
            <Container></Container>
          </Container>
        </Container>
      )}
    </>
  );
};

export default Description;
