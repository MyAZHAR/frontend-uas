import React from 'react';
import { Link } from 'react-router-dom';
import { Container, NavbarContainer, Brand, List, Item } from './Navbar.styled';

function Navbar() {
  return (
    <Container>
      <NavbarContainer>
        <div>
          <Brand>Covid App</Brand>
        </div>
        <List>
          <Item><Link to="/">Global</Link></Item>
          <Item><Link to="/covid/indonesia">Indonesia</Link></Item>
          <Item><Link to="/covid/provinsi">Provinsi</Link></Item>
          <Item><Link to="/covid/about">About</Link></Item>
        </List>
      </NavbarContainer>
    </Container>
  );
}

export default Navbar;
