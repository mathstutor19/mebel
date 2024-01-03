import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../components/Container/Container';
import Heading from '../../components/Heading/Heading';
import OrderCard from '../../components/OrderCard/OrderCard';
import { OrderCardData } from '../../data/OrderCardData';
import { CardWrapper, Section } from './Order.styled';

const Order = () => {
  const [sum, setSum] = useState(0);
  function plusClick(cost) {
    setSum((prev) => prev + cost);
  }
  function minusClick(cost) {
    setSum((prev) => prev - cost);
  }
  const { t } = useTranslation();
  return (
    <Section>
      <Container>
        <Heading>{t('order')}</Heading>
        <CardWrapper>
          {OrderCardData.map((item) => (
            <OrderCard
              key={item.id}
              name={item.name}
              image={item.image}
              cost={item.cost}
              plusClick={() => plusClick(item.cost)}
              minusClick={() => minusClick(item.cost)}
            />
          ))}
        </CardWrapper>
        <Heading> Общий {sum}</Heading>
      </Container>
    </Section>
  );
};

export default Order;
