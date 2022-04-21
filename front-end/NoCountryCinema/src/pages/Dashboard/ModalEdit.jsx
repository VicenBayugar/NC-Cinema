import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form } from 'react-bootstrap'


const ModalEdit = ({ modal, setModal, movie, props }) => {


    console.log(movie);


    const handleEdit = async (id) => {
        const endPoint = `https://nocountry-c4g17-api.herokuapp.com/api/movies/${id}`
        await axios.put(endPoint,{

        })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
                sweetAlert({ title: 'ops', icon: 'error' });
            });
    }

const [value, setValue]= useState();
    return (

        <Modal show={modal}>
            <ModalHeader style={{ display: 'block' }}>
                <h4>Editar Pelicula</h4>
            </ModalHeader>
            {movie &&
                <ModalBody>
                    <Form >
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre de Película</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={movie.title}
                            />
                            <Form.Label>Sinopsis</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="resume"
                                value={movie.resume}
                            />
                            <Form.Label>Origen</Form.Label>
                            <Form.Control
                                type="text"
                                name="origin"
                                value={movie.origin}
                            />
                            <Form.Label>Género</Form.Label>
                            <Form.Control
                                type="text"
                                name="genre"
                                value={movie.genre}
                            />
                            <Form.Label>Director</Form.Label>
                            <Form.Control
                                type="text"
                                name="director"
                                value={movie.director}
                            />
                            <Form.Label>Reparto</Form.Label>
                            <Form.Control
                                type="text"
                                name="actors"
                                value={movie.actors}
                            />
                            <Form.Label>Calificacion </Form.Label>
                            <Form.Control
                                type="text"
                                name="qualify"
                                value={movie.qualify}
                            />
                            <Form.Label>Duración </Form.Label>
                            <Form.Control
                                type="number"
                                name="duration"
                                value={movie.length}
                            />
                            <Form.Label>Lenguajes </Form.Label>
                            <Form.Control
                                type="text"
                                name="language"
                                value={movie.language}
                            />
                        </Form.Group>
                    </Form>
                </ModalBody>
            }
            <ModalFooter>
                <Button >Guardar cambios</Button>
                <Button onClick={() => setModal(false)}> Cancelar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalEdit