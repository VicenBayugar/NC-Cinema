import axios from 'axios';
import swal from 'sweetalert'
import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'

const CreatePelicula = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const resume = e.target.resume.value;
        const origin = e.target.origin.value;
        const genre = e.target.genre.value;
        const director = e.target.director.value;
        const actors = e.target.actors.value;
        const qualify = e.target.qualify.value;
        const length = e.target.duration.value;
        const image = e.target.image.value;
        const trailer = e.target.trailer.value;
        const language = e.target.language.value;
        try {
            await axios({
                method: 'post',
                url: 'http://localhost:3005/api/movies/create',
                data: 
                {
                title,
                resume,
                origin,
                genre,
                director,
                actors,
                qualify,
                length,
                image,
                trailer,
                premiere: true,
                language,}}
            )
            sweetAlert({ title: 'Create', icon: 'success' })
        } catch (error) {
            sweetAlert({ title: 'NO Create', icon: 'error' })
        }

    }



    return (
        <Row className='crud-p'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre de Película</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                    />
                    <Form.Label>Sinopsis</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="resume"
                    />
                    <Form.Label>Origen</Form.Label>
                    <Form.Control
                        type="text"
                        name="origin"
                    />
                    <Form.Label>Género</Form.Label>
                    <Form.Select
                        name="genre"
                    >
                        <option>Selecciona el género</option>
                        <option>Acción</option>
                        <option>Drama</option>
                        <option>Comedia</option>
                        <option>Terror</option>
                        <option>Animación</option>
                    </Form.Select>
                    <Form.Label>Director</Form.Label>
                    <Form.Control
                        type="text"
                        name="director"
                    />
                    <Form.Label>Reparto</Form.Label>
                    <Form.Control
                        type="text"
                        name="actors"
                    />
                    <Form.Label>Calificacion </Form.Label>
                    <Form.Control
                        type="text"
                        name="qualify"
                    />
                    <Form.Label>Duración </Form.Label>
                    <Form.Control
                        type="number"
                        name="duration"
                    />
                    <Form.Label>URL de imagen</Form.Label>
                    <Form.Control
                        type="text"
                        name="image"
                    />
                    <Form.Label>URL Trailer</Form.Label>
                    <Form.Control
                        type="text"
                        name="trailer"
                    />
                    
                    <Form.Label>Lenguajes </Form.Label>
                    <Form.Control
                        type="text"
                        name="language"
                    />
                </Form.Group>
                <Button
                    className=" mt-4 mb-4"
                    variant="primary"
                    type="submit"
                >
                    Crear Nueva Pelicula
                </Button>
            </Form>


        </Row>
    )
}

export default CreatePelicula