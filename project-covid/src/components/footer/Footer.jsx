import React from 'react';
import { Link } from 'react-router-dom';
import { Container, FooterContainer, Brand, List, Item } from './Footer.styled';

function Footer() {
  return (
    <Container>
      <FooterContainer>
        <div>
          <Brand>Covid App</Brand>
          <h3>By Azhar</h3>
        </div>
        <List>
          <Item><Link to="/">Global</Link></Item>
          <Item><Link to="/covid/indonesia">Indonesia</Link></Item>
          <Item><Link to="/covid/provinsi">Provinsi</Link></Item>
          <Item><Link to="/covid/about">About</Link></Item>
        </List>
      </FooterContainer>
    </Container>
  );
}

export default Footer;
