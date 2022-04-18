import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import './admin.css'

const HomeDash = () => {
  const [movies, setMovies] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  return (
    <Container className='cent'>
      <div className="mt-2 row row-cols-2 row-cols-md-2 g-2 align-center">
      <div className="">
        <div className="">
          <div className=''>
          <i className="bix2 bi bi-people-fill"></i>
          <i className="bix2 bi bi-arrow-up"></i>
          </div>
          <div className="">
            <h5 className="">Usuarios registrados : </h5>
            <h1>6</h1>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <div className=''>
          <i className="bix2 bi bi-film"></i>
          <i className=" bix2 bi bi-arrow-up"></i>
          </div>
          <div className="">
            <h5 className="">Peliculas en reproduccion: </h5>
            <h1>18</h1>
          </div>
        </div>
      </div>
    </div>
    </Container>


  )
}

export default HomeDash