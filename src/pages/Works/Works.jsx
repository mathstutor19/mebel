import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../components/Container/Container';
import Heading from '../../components/Heading/Heading';
import WorksCard from '../../components/WorksCard/WorksCard';
import { WorksCardData } from '../../data/WorksCardData';
import { CardWrapper, Section } from './Works.styled';

const Works = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container>
        <Heading>{t('ourWork')}</Heading>
        <CardWrapper>
          {WorksCardData.map((item) => (
            <WorksCard
              key={item.id}
              name={item.name}
              image={item.image}
              cost={item.cost}
            />
          ))}
        </CardWrapper>
      </Container>
    </Section>
  );
};

export default Works;
