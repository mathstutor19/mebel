import React from 'react';
import { ClientCardData } from '../../data/ClientCardData';
import ClientCard from '../ClientCard/ClientCard';
import Container from '../Container/Container';
import Title from '../Heading/Heading';
import { CardWrapper, Section } from './Clients.styled';

const Clients = () => {
  return (
    <Section>
      <Container>
        <Title>Наши клиенты</Title>
        <CardWrapper>
          {ClientCardData.map((item) => (
            <ClientCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              text={item.text}
            />
          ))}
        </CardWrapper>
      </Container>
    </Section>
  );
};

export default Clients;
