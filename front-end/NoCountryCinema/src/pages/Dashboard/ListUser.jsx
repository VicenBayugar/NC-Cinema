import React, { useEffect, useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';




const ListUser = () => {
    const navigate = useNavigate();
    const [userList, setUserList] = useState([]);

    //Mostrar todos los usuarios
    useEffect(async () => {
        const endPoint = 'http://localhost:3005/api/users';
        await axios
            .get(endPoint, userList)
            .then((res) => {
                const userObtenidos = res.data.users;
                setUserList(userObtenidos);
            })
            .catch((error) => {
                console.log(error);
                sweetAlert({ title: 'ops', icon: 'error' });
            });
    }, []);


    //Eliminar un Usuario
    const handleDelete = async (id) => {
        const endPoint = `http://localhost:3005/api/users/${id}`;
        await axios.delete(endPoint)
            .then((res) => {
                swal({ title: 'Deleted', icon: 'success' })
            })
            .catch((error) => {
                swal({ title: 'NO DELETED', icon: 'error' })
            })
    }


    return (
        <>


            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Usuario</th>
                        <th>Tipo Documento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{user.name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.documento}</td>
                                <td>
                                    <Button variant='outline' onClick={() => { handleDelete(user._id) }}><i className="bi bi-x-square text-white"></i></Button>
                                </td>
                            </tr>)
                    })}
                </tbody>


            </Table>

        </>
    )
}


export default ListUser