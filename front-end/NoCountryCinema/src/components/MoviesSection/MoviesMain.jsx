import { Container, CardGroup, Row, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MoviesMain = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState()

  useEffect(() => {
    setLoading(true);
    const obtenerMovies = async () => {
      try {
        const { data } = await axios.get('http://localhost:3005/api/movies');
        const moviesFinal = data.response.filter(
          movie => movie.premiere == false,
        );
        setMovies(moviesFinal);
        setLoading(false);
      } catch (err) {
        // setError(err.message)
        console.log(err.message);
      } 
    };
    obtenerMovies();
  }, []);

  return (
    <Container className="mt-5 align-items-center">
      {loading ? (
        <Container
          className="d-flex justify-content-center"
          style={{ height: '100rem' }}>
          <Spinner
            animation="border"
            role="status"
            style={{ width: '7rem', height: '7rem' }}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      ) : (
        <>
          <h3>PELÍCULAS</h3>
          <hr />
          <CardGroup className="mt-3 ">
            <Row xs={1} md={2} lg={6} className="g-4 justify-content-center">
              {movies.map(item => {
                return (
                  <Movie key={item._id} name={item.title} imgUrl={item.image} />
                );
              })}
            </Row>
          </CardGroup>
        </>
      )}
    </Container>
  );
};

export default MoviesMain;
