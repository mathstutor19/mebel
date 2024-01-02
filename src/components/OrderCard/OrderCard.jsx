import React from 'react';
import { Article, Cost, Image, Minus, Name, Plus } from './OrderCard.styled';

const OrderCard = ({ cost, image, name, plusClick, minusClick }) => {
  return (
    <Article>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
      <Cost>${cost}</Cost>
      <Plus onClick={plusClick} />
      <Minus onClick={minusClick} />
    </Article>
  );
};

export default OrderCard;
