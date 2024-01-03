import React from 'react';
import Container from '../../components/Container/Container';
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
import { useTranslation } from 'react-i18next';
import Heading from '../../components/Heading/Heading';
const Contact = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container>
        <Wrapper>
          <Left>
            <Heading>{t('contact')}</Heading>
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
