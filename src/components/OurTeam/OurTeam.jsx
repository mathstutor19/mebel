import React from 'react';
import { TeamCardData } from '../../data/TeamCardData';
import Container from '../Container/Container';
import TeamCard from '../TeamCard/TeamCard';
import Title from '../Heading/Heading';
import { Section, Wrapper } from './OurTeam.styled';

const OurTeam = () => {
  return (
    <Section>
      <Container>
        <Title>Наша команда</Title>
        <Wrapper>
          {TeamCardData.map((item) => (
            <TeamCard
              key={item.id}
              name={item.name}
              image={item.image}
              job={item.job}
              about={item.about}
            ></TeamCard>
          ))}
        </Wrapper>
      </Container>
    </Section>
  );
};

export default OurTeam;
