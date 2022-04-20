import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'react-bootstrap'

const ModalEdit = ({ modal, setModal}) => {
    

    
    //  const handleEdit = async (id) => {
    //      const endPoint = `http://localhost:3005/api/movies/${id}`
    //       await axios.put(endPoint)
    //       .then((res) => {
    //             console.log(res);
    //       })  
    //       .catch((error) => {
    //          console.log(error);
    //          sweetAlert({ title: 'ops', icon: 'error' });
    //       });
    //  }
     

    return (
        
        <Modal show={modal}>
            <ModalHeader style={{ display: 'block' }}>
                <h4>Editar Pelicula</h4>
            </ModalHeader>
            
            <ModalBody>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type='text' name='name' id='name'></input>
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Origen</label>
                    <input className="form-control" type='text' name='origin' id='origin'></input>
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Director</label>
                    <input className="form-control" type='text' name='director' id='director'></input>
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Reparto</label>
                    <input className="form-control" type='text' name='actors' id='actors'></input>
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Género</label>
                    <input className="form-control" type='text' name='genre' id='genre'></input>
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Calificación</label>
                    <input className="form-control" type='text' name='qualify' id='qualify'></input>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button >Guardar cambios</Button>
                <Button onClick={() => setModal(false)}> Cancelar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalEdit