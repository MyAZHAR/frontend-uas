import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 0 auto;
  border-radius: 4px;
`;

export const Table = styled.table`
  width: 70%;
  border-collapse: collapse;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  background-color: #f2f2f2;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const FormWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #06d6a0;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #05c693;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Subheading = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;
