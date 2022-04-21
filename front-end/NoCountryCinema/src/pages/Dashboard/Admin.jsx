import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'
import { Navigate, Outlet } from 'react-router-dom'
import './admin.css'



let role = sessionStorage.getItem('role')

const Admin = () => {
    return (
        <>
            {!(role === 'admin"')
                ? <Navigate to='/profile' />
                : <Container className='text-center'>
                    <h2 className='mt-1 mb-3 border pb-2 pt-2 text-center'>Panel de Control de No Country Cinema</h2>
                    <Row>
                        <Col xs={12} md={3}>
                            <Sidebar />
                        </Col>
                        <Col md={9}>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>}
        </>
    )
}

export default Admin