import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { Navigate, Outlet } from 'react-router-dom';
import './admin.css';

const Admin = () => {
  const [rol, setRol] = useState();
  useEffect(() => {
    let role = sessionStorage.getItem('role');
    setRol(role);
  }, []);

  return (
    <>
      {rol === 'user' ? (
        <Navigate to="/profile" />
      ) : (
        <Container className="text-center">
          <h2 className="mt-5 mb-5 border pb-2 pt-2 text-center">
            Panel de Control de No Country Cinema
          </h2>
          <Row className="mb-5">
            <Col xs={12} md={3}>
              <Sidebar />
            </Col>
            <Col md={9}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Admin;
