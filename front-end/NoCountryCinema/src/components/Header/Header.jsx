import React from 'react';
import { Navbar, Container, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoNC from '../../../img/logo_NCinema.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const idUser = sessionStorage.getItem('id') || null;

  function handlerClick(e) {
    e.preventDefault();
    if (idUser) {
      sessionStorage.clear();
      navigate('/');
      window.location.reload(true);
    }
  }

  useEffect(() => {
    if (idUser) {
      const obtenerUser = async () => {
        const data = await fetch(
          `https://nocountry-c4g17-api.herokuapp.com/api/users/${idUser}`,
        );
        const userObtenidas = await data.json();
        setData(userObtenidas);
      };
      obtenerUser();
    }
  }, [idUser, data]);

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
            {data ? (
              <NavDropdown title={data.user.name}>
                <div className="dropdown">
                  {data.user.role[0] === 'admin"' ? (
                    <Link to="/dashboard" className="dropdown-item">
                      <i className="fa fa-sign-in me-2">Dashboard</i>
                    </Link>
                  ) : (
                    <Link to="/profile" className="dropdown-item">
                      <i className="fa fa-sign-in me-2 ">Profile</i>
                    </Link>
                  )}
                  <hr className="dropdown-divider" />

                  <button
                    className="dropdown-item hover-dark "
                    onClick={handlerClick}>
                    Logout <i className="bi bi-box-arrow-right" />
                  </button>
                </div>
              </NavDropdown>
            ) : (
              <Link to={'/login'} className="text-decoration-none">
                <i
                  className="but bi bi-box-arrow-in-right"
                  title="Login">{` Iniciar sesión`}</i>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
