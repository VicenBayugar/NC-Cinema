import React from 'react';
import { Navbar, Container, Nav, NavDropdown,Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoNC from '/img/logo_NCinema.png';
import { Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


let token = sessionStorage.getItem('token');
let name = sessionStorage.getItem('data');
let role = sessionStorage.getItem('role');


const Header = () => {

  const [data, setData] = useState();
  const idUser = sessionStorage.getItem('id');

  useEffect(() => {
    const obtenerUser = async () => {
      const data = await fetch(`http://localhost:3005/api/users/${idUser}`);
      const userObtenidas = await data.json();
      setData(userObtenidas);
    };
    obtenerUser();
  }, []);

  console.log(data);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="img-fluid">
          <Link to="/">
            <img src={LogoNC} alt="logo" height="50" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fs-5 d-flex align-items-center justify-content-center">
            <Nav.Link href="#promociones">Promociones</Nav.Link>
            <Nav.Link href="#candy">Candy</Nav.Link>
            <NavDropdown title="Películas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Categoría 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Categoría 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Categoría 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Todas las categorías
              </NavDropdown.Item>
            </NavDropdown>
            {data ? 
            <Dropdown>
              <Dropdown.Toggle className='btn btn-dark btn-outline-secondary'  id="dropdown-basic">
                {data.user.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Link to="/profile/" className="dropdown-item">
                  <span>Profile</span>
                </Link>
                {
                  data.user.role[0] === 'admin"' &&
                  
                    <Link to="/dashboard/" className="dropdown-item">
                      <span>Dashboard</span>
                    </Link>
                 
                }
              </Dropdown.Menu>
            </Dropdown>
            :
            <Nav.Link href="/login">Login</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
