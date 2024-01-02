import React from 'react';
import Container from '../../components/Container/Container';
import Title from '../../components/Heading/Heading';
import {
  Button,
  Form,
  Input,
  Left,
  Right,
  Textarea,
  Wrapper,
  Image,
  Section,
} from './Contact.styled';
import images from '../../assets/images/contact.png';
const Contact = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Left>
            <Title>Контакты</Title>
            <Form>
              <Input type="text" placeholder="Ваше имя" />
              <Input type="text" placeholder="+7(_ _ _) _ _ _-_ _ - _ _ " />
              <Textarea
                name=""
                placeholder="Кратко опишите Ваш вопрос"
              ></Textarea>
              <Button type="submit">Отправлять</Button>
            </Form>
          </Left>
          <Right>
            <Image src={images} alt="contact" />
          </Right>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Contact;
