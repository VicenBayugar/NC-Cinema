import React from 'react';
import './Carousel.css';
import { Carousel, Container } from 'react-bootstrap';

export const Carro = () => {
  return (
    <Container>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 img-test"
      src="https://static.cinemarkhoyts.com.ar/Images/Highlights/437.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.cinemarkhoyts.com.ar/Images/Highlights/431.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.cinemarkhoyts.com.ar/Images/Highlights/434.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
      </Carousel>
      </Container>
  );
};
