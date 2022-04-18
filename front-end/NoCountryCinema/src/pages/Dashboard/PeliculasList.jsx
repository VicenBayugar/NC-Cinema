import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from 'react-bootstrap'
import ModalEdit from './ModalEdit';





const PeliculasList = () => {

    

    const [movieList, setMovieList] = useState([]);
    const [modal, setModal] = useState(false);

    //mostrar peliculas desde la base de datos
    useEffect(async() => {
        const endPoint = 'http://localhost:3005/api/movies';
        await axios
            .get(endPoint, movieList)
            .then((res) => {
                const apidata = res.data.response;
                
                setMovieList(apidata);
            })
            .catch((error) => {
                console.log(error);
                sweetAlert({ title: 'ops', icon: 'error' });
            });
    }, []);

    //Funcion para borrar una película
    const handleDelete =async (id) => {
        const endPoint = `http://localhost:3005/api/movie/${id}`;
        await axios.delete(endPoint)
            .then(swal({ title: 'Deleted', icon: 'success' }))

            .catch((error) => {
                swal({ title: 'NO DELETED', icon: 'error' })
            })
        }

    //mostrar modal
    const handleClick = () => {
        setModal(true);
    }

    

    return (

        <Container>
            <Row>

                <Table className='table_section tab-pelicula' striped bordered hover variant="dark" >
                    <thead >
                        <tr>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movieList.map((movie, idx) => {
                            return (
                                <tr key={idx}>
                                    <td >{movie.title}</td>

                                    <td>
                                        <Button variant='outline' onClick={handleClick} ><i className="bi bi-pencil-square text-white"></i></Button>
                                        <Button variant='outline' onClick={() => { handleDelete(movie._id) }}><i className="bi bi-x-square text-white"></i></Button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>

            </Row>
            <ModalEdit modal={modal} setModal={setModal} />



        </Container>
    )
}

export default PeliculasList