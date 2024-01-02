import React from 'react';
import { AdvantageCardData } from '../../data/AdvantageCardData';
import AdvantageCard from '../AdvantageCard/AdvantageCard';
import Container from '../Container/Container';
import Title from '../Heading/Heading';
import { CardWrapper, Section } from './Advantages.styled';

const Advantages = () => {
  return (
    <Section>
      <Container>
        <Title>Наши преймущества</Title>
        <CardWrapper>
          {AdvantageCardData.map((item) => (
            <AdvantageCard
              key={item.id}
              advantage={item.advantage}
              image={item.image}
              text={item.text}
            />
          ))}
        </CardWrapper>
      </Container>
    </Section>
  );
};

export default Advantages;
