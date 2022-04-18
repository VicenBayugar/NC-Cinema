import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <footer className="container-fluid">
        <hr />
        <Row
          className="centrarFooter "
          style={{
            margin: '15px',
          }}>
          <Col className="d-flex align-items-center flex-column justify-content-center">
            <Row className="centrarFooter">
              <p className="fs-5">
                Siguenos si amas las películas o quieres enterarte de nuestras
                promociones, concursos y mas.
              </p>
            </Row>
            <Row>
              <Col className="centrarFooter">
                <Button
                  className="btn"
                  variant="link"
                  href="https://www.twitter.com"
                  target="_blank">
                  <i className="bi bi-twitter redes" color="#00acee"></i>
                </Button>
              </Col>
              <Col className="centrarFooter">
                <Button
                  className="btn"
                  variant="link"
                  href="https://www.facebook.com"
                  target="_blank">
                  <i className="bi bi-facebook  redes"></i>
                </Button>
              </Col>
              <Col className="centrarFooter">
                <Button
                  className="btn"
                  variant="link"
                  href="https://www.instagram.com"
                  target="_blank">
                  <i className="bi bi-instagram  redes"></i>
                </Button>
              </Col>
            </Row>
          </Col>

          <Col
            style={{
              textAlign: 'center',
              margin: '4px',
            }}>
            <p>¿Donde estamos?</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167125041003!2d-58.383759082556146!3d-34.6037389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1648610425762!5m2!1ses-419!2sar"
              loading="lazy"
              margin="1px"></iframe>
          </Col>
        </Row>
        <Row className="centrarFooter">
          <p className="g17">&copy;NoCountry G-17 (2022)</p>
        </Row>
      
    </footer>
  );
};

export default Footer;
