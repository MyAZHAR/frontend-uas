import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;

  @media (min-width: 992px) {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

export const InfoLeft = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

export const InfoRight = styled.div`
  @media (min-width: 992px) {
    flex-basis: 60%;
  }
`;

export const Title = styled.h2`
  color: #06d6a0;
  margin-bottom: 0.5rem;
  font-size: 2.44rem;
`;

export const Detail = styled.p`
  color: #118ab2;
  margin-bottom: 1.56rem;
`;

export const Description = styled.p`
  color: #64748b;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
`;
