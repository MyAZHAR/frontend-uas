import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  GlobalSection,
  Title,
  Subtitle,
  DataContainer,
  DataBox,
  DataTitle,
  DataNumber,
  RecoverNumber,
  DeathNumber,
  RegionsSection,
  RegionsGrid,
  RegionBox,
  RegionTitle,
  RegionDataContainer,
  RegionDataBox
} from './Global.styled';

const Global = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://covid-fe-2023.vercel.app/api/global.json')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <div>Loading...</div>;

  const globalData = {
    confirmed: data.global.find(item => item.status === 'confirmed').total,
    recovered: data.global.find(item => item.status === 'recovered').total,
    death: data.global.find(item => item.status === 'death').total,
  };

  return (
    <Container>
      <GlobalSection>
        <Title>Global Situation</Title>
        <Subtitle>Data Covid Berdasarkan Global</Subtitle>
        <DataContainer>
          <DataBox>
            <DataTitle>Confirmed</DataTitle>
            <DataNumber>{globalData.confirmed.toLocaleString()}</DataNumber>
          </DataBox>
          <DataBox>
            <DataTitle>Recovered</DataTitle>
            <RecoverNumber>{globalData.recovered.toLocaleString()}</RecoverNumber>
          </DataBox>
          <DataBox>
            <DataTitle>Death</DataTitle>
            <DeathNumber>{globalData.death.toLocaleString()}</DeathNumber>
          </DataBox>
        </DataContainer>
      </GlobalSection>

      <RegionsSection>
        <Title>Situation by Regions</Title>
        <Subtitle>Bacaan Pilihan Covid</Subtitle>
        <RegionsGrid>
          {data.regions.map(region => (
            <RegionBox key={region.name}>
              <RegionTitle>{region.name}</RegionTitle>
              <RegionDataContainer>
                <RegionDataBox>
                  <DataTitle>Confirmed</DataTitle>
                  <DataNumber>{region.numbers.confirmed.toLocaleString()}</DataNumber>
                </RegionDataBox>
                <RegionDataBox>
                  <DataTitle>Recovered</DataTitle>
                  <RecoverNumber>{region.numbers.recovered.toLocaleString()}</RecoverNumber>
                </RegionDataBox>
                <RegionDataBox>
                  <DataTitle>Death</DataTitle>
                  <DeathNumber>{region.numbers.death.toLocaleString()}</DeathNumber>
                </RegionDataBox>
              </RegionDataContainer>
            </RegionBox>
          ))}
        </RegionsGrid>
      </RegionsSection>
    </Container>
  );
};

export default Global;
