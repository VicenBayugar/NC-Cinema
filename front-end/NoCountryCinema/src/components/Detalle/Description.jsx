import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import axios from 'axios'
import './detail.css'
import ReactPlayer from 'react-player'

const Description = () => {

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get('movieID').toString;
  console.log(query);

  const [movie, setMovie] = useState(null);

  
  return (
    <>
    {movie &&
    <Container>
      <Row className='contenedor'>
        <ReactPlayer
          url={''}
          width='100%'
          height='100%'
          controls
          className='player' />
      </Row>
      <hr />
      <Row className='row'>
        <h2>{movie.title} </h2>
      </Row>
      <Row>
        <Col xl={6}>
          <img w src={''} className='img-fluid' alt="..." />
        </Col >
        <Col xl={6}>
          <Row>
            <h3>Sinopsis</h3>
            <p></p>
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
                  <td></td>
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
                  <td></td>
                </tr>
                <tr>
                  <td>Reparto:</td>
                  <td></td>
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