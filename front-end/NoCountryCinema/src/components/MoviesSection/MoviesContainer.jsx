import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import React, { useState, useEffect } from 'react';
import './MovieContainer.css';
import Data from '../../data/movies.json';
const MoviesContainer = props => {
  const [movies, setMovies] = useState([]);

  return (
    <Container className="mt-5">
      <h3>{props.title}</h3>
      <hr />
      <Container
        className="section scrolling-wrapper row flex-row flex-nowrap row-cols-1 row-cols-md-3 p-2 w-100
"
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
        }}>
        {Data.map((item, index) => {
          return <Movie key={index} name={item.name} imgUrl={item.imgUrl} />;
        })}
        {/* {movies.map((item, index) => {
          return <Movie key={index} name={item.title} imgUrl={item.image} />;
        })} */}
      </Container>
    </Container>
  );
};

export default MoviesContainer;
