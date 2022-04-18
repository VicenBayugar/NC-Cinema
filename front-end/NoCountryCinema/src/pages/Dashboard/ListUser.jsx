import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';




const ListUser = () => {

    const [userList, setUserList] = useState([]);
    useEffect(() => {

        const endPoint = 'http://localhost:3005/api/users';
        axios
            .get(endPoint, userList)
            .then((res) => {
                const apidata = res.data.response;
                setUserList(apidata);
            })
            .catch((error) => {
                console.log(error);
                sweetAlert({ title: 'ops', icon: 'error' });
            });
    }, []);

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
                {userList.map((user, idx) => {
                    return (
                        <tbody key={idx}>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>{user.documento}</td>
                                <td>
                                    <Button></Button>
                                    <Button></Button>
                                </td>
                            </tr>

                        </tbody>
                    )
                })}
            </Table>

        </>
    )
}

export default ListUser