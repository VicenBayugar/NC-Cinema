import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import axios from 'axios'
import './detail.css'
import ReactPlayer from 'react-player'

const Description = ({movie}) => {

  return (
    <>
    {movie &&
    <Container>
      {/* <Row className='contenedor'>
        <ReactPlayer
          url={''}
          width='100%'
          height='100%'
          controls
          className='player' />
      </Row>
      <hr /> */}
      <Row className='row'>
        <h2>{movie.title} </h2>
      </Row>
      <Row>
        <Col xl={6}>
          <img src={movie.image} className='img-fluid' alt="imagenPeli" width={'500px'} />
        </Col >
        <Col xl={6}>
          <Row>
            <h3>Sinopsis</h3>
            <p>{movie.resume}</p>
          </Row>
          <Row>
            <Table striped hover variant="dark">
              <thead>
              </thead>
              <tbody>
                <tr>
                  <td>Director:</td>
                  <td>{movie.director}</td>
                </tr>
                <tr>
                  <td>Idiomas</td>
                  <td>{movie.language}</td>
                </tr>
                <tr>
                  <td>Disponible:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Duracion:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Género</td>
                  <td>{movie.genre}</td>
                </tr>
                <tr>
                  <td>Reparto:</td>
                  <td>{movie.actors}</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
      <Row>

      </Row>
    </Container>}
    </>
  )
}

export default Description