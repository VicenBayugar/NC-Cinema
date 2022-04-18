import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'

const CreatePelicula = () => {

    
    return (
        <Row className='crud-p'>
            <Form >
                <Form.Group className="mb-3">
                    <Form.Label>Nombre de Película</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
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
                    <Form.Label>Reparto</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                    />
                    <Form.Label>Director</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                    />
                    <Form.Label>Duración </Form.Label>
                    <Form.Control
                        type="number"
                        name="name"
                    />
                    <Form.Label>Género</Form.Label>
                    <Form.Select
                        name="name">
                        <option>Selecciona el género</option>
                        <option>Acción</option>
                        <option>Drama</option>
                        <option>Comedia</option>
                        <option>Terror</option>
                        <option>Animación</option>
                    </Form.Select>
                </Form.Group>
                <Button
                    className=" mt-4 mb-4"
                    variant="primary"
                    type="submit">
                    Crear Nueva Pelicula
                </Button>
            </Form>


        </Row>
    )
}

export default CreatePelicula