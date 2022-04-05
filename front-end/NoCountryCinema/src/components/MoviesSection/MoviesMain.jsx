import { Container, CardGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import React, { useEffect, useState } from 'react';
import Data from '../../data/movies.json';

const MoviesMain = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const obtenerMovies = async () => {
      const data = await fetch('http://localhost:3005/api/movies');
      const moviesObtenidas = await data.json();
      const moviesFinal = moviesObtenidas.response.filter(movie => movie.premiere == false)
      setMovies(moviesFinal);
    };
    obtenerMovies();
  }, []);

  return (
    <Container className="mt-5 align-items-center">
      <h3>PELÍCULAS</h3>
      <hr />
      <CardGroup className='mt-2 '>
        <Row xs={1} md={2} lg={6} className="g-4 justify-content-center">
          {movies.map(item => {
            return (
              <Movie key={item._id} name={item.title} imgUrl={item.image} />
            );
          })}
        </Row>
      </CardGroup>
    </Container>
  );
};

export default MoviesMain;
