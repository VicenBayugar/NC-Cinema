import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import React from 'react';

const MoviesContainer = () => {
  return (
    <Container>
      <h3>PELÍCULAS</h3>
      <hr />
      <div style={{ marginTop: '1rem' }}>
        <Movie />
      </div>
    </Container>
  );
};

export default MoviesContainer;
