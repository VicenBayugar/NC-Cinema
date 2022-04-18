import React from 'react';
import { Navbar, Container, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoNC from '/img/logo_NCinema.png';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


const Header = () => {

  const [data, setData] = useState();
  const idUser = sessionStorage.getItem('id');

  function handlerClick(e) {
    e.preventDefault();
    if(idUser){
      sessionStorage.clear();
      window.location.reload(true)
    }
    navigate('/');
  }

  useEffect(() => {
    const obtenerUser = async () => {
      const data = await fetch(`http://localhost:3005/api/users/${idUser}`);
      const userObtenidas = await data.json();
      setData(userObtenidas);
    };
    obtenerUser();
  }, []);

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

            {
              data ?
                <NavDropdown title={data.user.name}>

                  <div className="dropdown">
                    {
                      data.user.role[0] === 'admin"'
                        ? <Link to="/dashboard/" className="dropdown-item">
                          <i className="fa fa-sign-in me-2">Dashboard</i>
                        </Link>
                        : <Link to="profile" className="dropdown-item">
                          <i className="fa fa-sign-in me-2 ">profile</i>
                        </Link>
                    }
                    <hr className="dropdown-divider" />

                    <button className="dropdown-item hover-dark " onClick={handlerClick}>Logout <i className="bi bi-box-arrow-right" /></button>


                  </div>

                </NavDropdown>
                :
                <Link to={'/login'} >
                  <i className='but bi bi-box-arrow-in-right'title='Login'></i>
                </Link>


            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
