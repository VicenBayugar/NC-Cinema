import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import axios from 'axios';
import './detail.css';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import Butaca from './Butacas';

const Description = ({ movie }) => {
  const butacas = movie.butacas;

  console.log(movie);
  
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
                      <td className="col-5">
                        {movie.tags.map((mov, idx) => {
                          return (
                            <p id="p" key={idx}>
                              {mov}
                            </p>
                          );
                        })}
                      </td>
                    </tr>
                    <tr>
                      <td>Disponible: </td>
                      <td id="disponible">2D</td>
                      <td id="disponible">3D</td>
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
                          />
                          
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={6} className="px-0">
                  <Row>
                    <h3 className='mt-5 col-12'>horarios</h3>
                  </Row>
                  <Row>
                    <Col className='col-2 text-center mt-3'>
                      <h3 className='border rounded-2'>2D</h3>
                      <h4>doblada</h4>
                    </Col>
                    <Row>
                    <button className='border border-info rounded-3 col-3 m-3 p-2 bg-dark text-white'>
                        9:00pm
                      </button>
                      <button className='border border-info rounded-3 col-3 m-3 p-2 bg-dark text-white'>
                        9:00pm
                      </button>
                    </Row>
                  </Row>
                  <Row>
                    <Col className='col-2 text-center m-3'>
                      <h3 className=' border rounded-3 '>
                        3D
                      </h3>
                      <h4>
                        subtitulada
                      </h4>
                    </Col>
                    <Row>
                      <button className='border border-info rounded-3 col-3 m-3 p-2 bg-info text-dark'>
                        9:00pm
                      </button>
                      <button className='border border-info rounded-3 col-3 m-3 p-2 bg-info text-dark'>
                        9:00pm
                      </button>
                      <button className='border border-info rounded-3 col-3 m-3 p-2 bg-info text-dark'>
                        9:00pm
                      </button>  
                    </Row>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
          <Container className="text-center mb-2">
            <Button
            // onClick={handlerClick}
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
