import React from 'react';
import { Navbar, Container, Nav, NavDropdown,Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoNC from '/img/logo_NCinema.png';
import { Link, Navigate } from 'react-router-dom';


let token = sessionStorage.getItem('token')


const Header = () => {
  const user = {
    "name": "eze",
    "role": "admin"
  }
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
            {user.name ? 
            <Dropdown>
              <Dropdown.Toggle className='btn btn-dark btn-outline-secondary'  id="dropdown-basic">
                {user.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Link to="/profile/" className="dropdown-item">
                  <span>Profile</span>
                </Link>
                {
                  user.role === "admin" &&
                  
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
