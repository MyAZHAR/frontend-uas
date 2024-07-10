// Indo.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Header,
  Statistics,
  StatBox,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableData,
} from './Indo.styled';

const Indo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('https://covid-fe-2023.vercel.app/api/indonesia.json')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { indonesia, regions } = data;

  const confirmed = indonesia.find((item) => item.status === 'confirmed').total;
  const recovered = indonesia.find((item) => item.status === 'recovered').total;
  const death = indonesia.find((item) => item.status === 'death').total;

  return (
    <Container>
      <Header>Indonesia Situation</Header>
      <Statistics>
        <StatBox>
          <h3>Confirmed</h3>
          <p>{confirmed.toLocaleString()}</p>
        </StatBox>
        <StatBox>
          <h3>Recovered</h3>
          <p>{recovered.toLocaleString()}</p>
        </StatBox>
        <StatBox>
          <h3>Death</h3>
          <p>{death.toLocaleString()}</p>
        </StatBox>
      </Statistics>
      <Header>Situation by Provinces</Header>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableData>No</TableData>
              <TableData>Province</TableData>
              <TableData>Confirmed</TableData>
              <TableData>Recovered</TableData>
              <TableData>Treatment</TableData>
              <TableData>Death</TableData>
            </TableRow>
          </TableHead>
          <TableBody>
            {regions.map((region, index) => (
              <TableRow key={region.name}>
                <TableData>{index + 1}</TableData>
                <TableData>{region.name}</TableData>
                <TableData>{region.numbers.confirmed.toLocaleString()}</TableData>
                <TableData>{region.numbers.recovered.toLocaleString()}</TableData>
                <TableData>{region.numbers.treatment.toLocaleString()}</TableData>
                <TableData>{region.numbers.death.toLocaleString()}</TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Indo;
