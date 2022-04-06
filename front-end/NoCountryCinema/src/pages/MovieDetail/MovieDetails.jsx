import React, {useState, useEffect} from 'react'
import Description from '../../components/Detalle/Description'
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { title } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const obtenerMovie = async () => {
      const data = await fetch('http://localhost:3005/api/movies');
      const moviesObtenidas = await data.json();
      const movieFinal = moviesObtenidas.response.filter(movie => movie.title == title)
      setMovie(movieFinal[0]);
    };
    obtenerMovie();
  }, [title]);
  return (
    <>
    <Description movie={movie}/>
    </>
  )
}

export default MovieDetails