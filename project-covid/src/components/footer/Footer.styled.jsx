import styled from 'styled-components';

export const Container = styled.div`
  background-color: #06D6A0;
  padding: 1rem;
  color: #ffffff;
`;

export const FooterContainer = styled.footer`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  font-style: normal;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Brand = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Item = styled.li`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
