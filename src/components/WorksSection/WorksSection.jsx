import React from 'react';
import { WorksCardData } from '../../data/WorksCardData';
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import WorksCard from '../WorksCard/WorksCard';
import { Button, CardWrapper, Section } from './WorksSection.styled';

const WorksSection = () => {
  return (
    <Section>
      <Container>
        <Heading>Наши работы</Heading>
        <CardWrapper>
          {WorksCardData.slice(0, 3).map((item) => (
            <WorksCard
              key={item.id}
              name={item.name}
              image={item.image}
              cost={item.cost}
            />
          ))}
        </CardWrapper>
        <Button to="/works">Раскрыть Ещё</Button>
      </Container>
    </Section>
  );
};

export default WorksSection;
