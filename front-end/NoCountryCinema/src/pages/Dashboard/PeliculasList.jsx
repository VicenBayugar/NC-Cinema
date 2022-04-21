import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import ModalEdit from './ModalEdit';
import swal from 'sweetalert';
import { useNavigate, useParams } from 'react-router-dom';





const PeliculasList = () => {

    const navigate = useNavigate()



    const [movieList, setMovieList] = useState([]);
    const [modal, setModal] = useState(false);


    //mostrar peliculas desde la base de datos
    useEffect(async () => {
        const endPoint = 'https://nocountry-c4g17-api.herokuapp.com/api/movies';
        await axios
            .get(endPoint, movieList)
            .then((res) => {
                const result = res.data.response;
                setMovieList(result)
            })
            .catch((error) => {
                console.log(error);
                swal({ title: 'ops', icon: 'error' });
            });
    }, []);

    //Funcion para borrar una película
    const handleDelete = async (id) => {
        const endPoint = `https://nocountry-c4g17-api.herokuapp.com/api/movies/${id}`;
        await axios.delete(endPoint)
            .then((res) => {
                swal({ title: 'Deleted', icon: 'success' })
            })
            .catch((error) => {
                swal({ title: 'NO DELETED', icon: 'error' })
            })
    }

    //mostrar modal
    const [movieId, setMovieId] = useState()

    const handleClick = (movie) => {
        setModal(true);
        setMovieId(movie);
    }



    return (
        <Container>
            <Row>

                <Table className='table_section tab-pelicula' striped bordered hover variant="dark" >
                    <thead >
                        <tr>
                            <th>idx</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movieList.map((movie, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td >{movie.title}</td>
                                    <td>
                                        <Button variant='link'  onClick={() => { handleClick(movie) }}><i className="bi bi-pencil-square text-white"></i></Button>
                                        <Button variant='link' onClick={() => { handleDelete(movie._id) }}><i className="bi bi-x-square text-white"></i></Button>
                                    </td>

                                </tr>)
                        })}
                    </tbody>
                </Table>
                <ModalEdit movie={movieId} modal={modal} setModal={setModal} />

            </Row>




        </Container>


    )
}

export default PeliculasList