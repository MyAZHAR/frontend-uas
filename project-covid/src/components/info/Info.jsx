import React from 'react';
import Button from '../Button/Button';
import {
  Container,
  InfoSection,
  InfoLeft,
  InfoRight,
  Title,
  Detail,
  Description,
  Image,
} from './Info.styled';

function Info() {
  return (
    <Container>
      <InfoSection>
        <InfoLeft>
          <Title>Covid ID</Title>
          <Detail>Monitoring Perkembangan Covid</Detail>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis cum provident natus alias delectus dignissimos similique sit, quas voluptate esse.
          </Description>
          <Button title="Vaccine" />
        </InfoLeft>
        <InfoRight>
          <Image
          src="/image/undraw_medical_care_movn.png"
          alt="Plaseholder" />
        </InfoRight>
      </InfoSection>
    </Container>
  );
}

export default Info;
