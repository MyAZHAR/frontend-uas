// Indo.styled.jsx
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #06D6A0;
`;

export const Statistics = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;

export const StatBox = styled.div`
  background: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  flex: 1;
  margin: 0 10px;

  h3 {
    color: #06D6A0;
  }

  p {
    font-size: 24px;
    color: #696969;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHead = styled.thead`
  background-color: #06D6A0;
  color: white;
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  color: #696969;

  &:first-child {
    text-align: left;
  }
`;
