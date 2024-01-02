import React from 'react';
import { Text, TextWrapper, Title, Article, Image } from './ClientCard.styled';

const ClientCard = ({ id, name, text, image }) => {
  return (
    <Article>
      <Image src={image} alt={name} />
      <TextWrapper>
        <Title>
          <span>{id}</span>
          {name}
        </Title>
        <Text>{text}</Text>
      </TextWrapper>
    </Article>
  );
};

export default ClientCard;
