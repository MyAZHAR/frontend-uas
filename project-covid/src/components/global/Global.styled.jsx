import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
`;

export const GlobalSection = styled.section`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
  color: #00bfa6;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #888;
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

export const DataBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px 0px;
  width: 200px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 150px;
    padding: 20px 30px;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const DataTitle = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
`;

export const DataNumber = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #00bfa6;
`;

export const DeathNumber = styled(DataNumber)`
  color: #ff647c;
`;

export const RecoverNumber = styled(DataNumber)`
  color: #118AB2;
`;

export const RegionsSection = styled.section`
  margin-top: 40px;
`;

export const RegionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const RegionBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const RegionTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #00bfa6;
`;

export const RegionDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const RegionDataBox = styled.div`
  width: 100%;
`;
