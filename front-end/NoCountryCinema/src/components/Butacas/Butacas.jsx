import { Butacas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import React, {useState, useEffect} from 'react';


const Butacas= (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const obtenerButacas = async () => {
      const data = await fetch('http://localhost:3005/api/movies');
      const butacasObtenidas = await data.json();
      const butacasFinal = butacasObtenidas.response.filter(movie => movie.butacas == true)
      setButacas(butacasFinal);
    };
    obtenerButacas();
  }, []);
  return (
    <Container className="mt-5">
      <h3>{props.butacas}</h3>
      <hr />
      <Container
				className="section scrolling-wrapper row flex-row flex-nowrap row-cols-1 row-cols-md-4 p-2 w-100 mh-100
"
        style={{ overflowX: "auto", overflowY: "hidden", whiteSpace: "nowrap" }}>
        {movies.map((item) => {
          return <Movie key={item._id} name={item.butacas} imgUrl={item.image} />
        })}
      </Container>
    </Container>
  );
};

export default Butacas;
