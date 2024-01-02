import React from 'react';
import { Button, Head, Item, Items, Text, Title } from './Header.styled';

const Header = () => {
  return (
    <Head>
      <Title>КУХНИ НА ЗАКАЗ</Title>
      <Text>Стильная кухня от производителя по цене на 20% ниже рынка</Text>
      <Items>
        <Item>
          <span> Бесплатный </span> дизайн проект
        </Item>
        <Item>
          Гарантия <span>лучшей Цены</span>
        </Item>
        <Item>
          Производство от <span>25 до 45 дней</span>
        </Item>
        <Item>
          Гарантийное <span>обслуживание 5 лет</span>
        </Item>
      </Items>
      <Button>бесплатная консультация дизайнера </Button>
    </Head>
  );
};

export default Header;
