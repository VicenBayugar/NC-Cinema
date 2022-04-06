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
       <Row className='contenedor'>
        <ReactPlayer
          url={movie.trailer}
          width='100%'
          height='100%'
          controls
          className='player' />
      </Row>
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
                  <td >Idiomas: </td>
                  <td className='col-5'>{movie.language.map((mov, idx)=>{
                    return(
                      <p id='p'>{mov}</p>
                    )
                  })}</td>
                  <td className='col-5'>{movie.tags.map((mov, idx)=>{
                    return(
                      <p id='p'>{mov}</p>
                    )
                  })}</td>
                </tr>
                <tr>
                  <td>Disponible: </td>
                  <td id='disponible'>2D</td>
                  <td id='disponible'>3D</td>
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