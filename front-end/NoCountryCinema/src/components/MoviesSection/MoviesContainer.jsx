import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import React, {useState, useEffect} from 'react';
import './MovieContainer.css'

const MoviesContainer = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const obtenerMovies = async () => {
      const data = await fetch('https://nocountry-c4g17-api.herokuapp.com/api/movies');
      const moviesObtenidas = await data.json();
      sessionStorage.setItem('movies', moviesObtenidas.response);
      const moviesFinal = moviesObtenidas.response.filter(movie => movie.premiere == true)
      setMovies(moviesFinal);
    };
    obtenerMovies();
  }, []);
  return (
    <Container className="mt-5">
      <h3>{props.title}</h3>
      <hr />
      <Container
				className="section scrolling-wrapper row flex-row flex-nowrap row-cols-1 row-cols-md-4 p-2 w-100 mh-100
"
        style={{ overflowX: "auto", overflowY: "hidden", whiteSpace: "nowrap" }}>
        {movies.map((item) => {
          return <Movie key={item._id} name={item.title} imgUrl={item.image} />
        })}
      </Container>
    </Container>
  );
};

export default MoviesContainer;
