import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import React from 'react';
import  './MovieContainer.css'
const MoviesContainer = () => {
  return (
    <Container>
      <h3>PELÍCULAS</h3>
      <hr />
      <div
				className="scrolling-wrapper row flex-row flex-nowrap row-cols-1 row-cols-md-3 
"
				style={{ overflowX: "auto", overflowY: "hidden", whiteSpace: "nowrap" }}>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
			</div>
    </Container>
  );
};

export default MoviesContainer;
