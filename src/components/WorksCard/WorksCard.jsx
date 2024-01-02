import React from 'react';
import {
  Article,
  Image,
  SupText,
  Text,
  TextWrapper,
  Title,
} from './WorksCard.styled';

const WorksCard = ({ image, cost, name }) => {
  return (
    <Article>
      <Image src={image} alt={name} />
      <Title>{name}</Title>
      <TextWrapper>
        <Text>
          {cost} <span> ЛЕЙ / МЕСЯЦ</span>
        </Text>
        <SupText>БЕЗ ПЕРВОГО ВЗНОСА - 12 месяцев</SupText>
      </TextWrapper>
      <div></div>
    </Article>
  );
};

export default WorksCard;
