import React from 'react';
import './Carousel.css';
import { Carousel, Container } from 'react-bootstrap';
import Banner1 from '../../../public/img/banner01.jpg';
import Banner2 from '../../../public/img/banner02.jpg';
import Banner3 from '../../../public/img/banner03.jpg';

export const Carro = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
