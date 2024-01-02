import React from 'react';
import { Article, Image, Text, Title } from './AdvantageCard.styled';

const AdvantageCard = ({ advantage, image, text }) => {
  return (
    <Article>
      <Image src={image} alt={advantage} />
      <Title>{advantage}</Title>
      <Text>{text}</Text>
    </Article>
  );
};

export default AdvantageCard;
