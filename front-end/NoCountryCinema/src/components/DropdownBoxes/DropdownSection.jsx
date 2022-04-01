import React from 'react';
// import { AiOutlineShoppingCart } from 'react-icons/all';
import { DropdownButton, Container, Dropdown, Button } from 'react-bootstrap';
export const DropdownSection = () => {
  return (
    <Container className="my-3">
      <h5>COMPRA TUS ENTRADAS ONLINE</h5>
      <Container className="d-flex">
        <DropdownButton
          className="mx-2"
          variant="light"
          title="FECHA"
          id="input-group-dropdown-1">
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          className="mx-2"
          variant="light"
          title="PELÍCULA"
          id="input-group-dropdown-1">
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          className="mx-2"
          variant="light"
          title="HORA"
          id="input-group-dropdown-1">
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <Button
          className="mx-2"
          style={{
            backgroundColor: '#00C5BC',
            border: 'none',
            fontWeight: 'bolder',
          }}>
          <i className="fa-solid fa-cart-shopping"></i>
          &nbsp; COMPRAR
        </Button>
      </Container>
    </Container>
  );
};
