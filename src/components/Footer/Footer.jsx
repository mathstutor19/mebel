import React from 'react';
import {
  Copyright,
  FooterWrapper,
  Gmail,
  Image,
  Items,
  ItemsTitle,
  Left,
  Location,
  Nav,
  NavItem,
  Phone,
  Right,
  SocialItem,
  Socials,
  Wrapper,
} from './Footer.styled';
import logo from '../../assets/images/logo.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import viber from '../../assets/icons/viber.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import youtube from '../../assets/icons/youtube.svg';
import Container from '../Container/Container';
const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterWrapper>
          <Left>
            <Image src={logo} alt="logo" />
            <Socials>
              <SocialItem>
                <img src={facebook} alt="facebook" />
              </SocialItem>
              <SocialItem>
                <img src={instagram} alt="instagram" />
              </SocialItem>
              <SocialItem>
                <img src={linkedin} alt="linkedin" />
              </SocialItem>
              <SocialItem>
                <img src={viber} alt="viber" />
              </SocialItem>
              <SocialItem>
                <img src={whatsapp} alt="whatsapp" />
              </SocialItem>
              <SocialItem>
                <img src={youtube} alt="youtube" />
              </SocialItem>
            </Socials>
            <Nav>
              <NavItem>Главная</NavItem>
              <NavItem>Наши работы</NavItem>
              <NavItem>Заказ</NavItem>
              <NavItem>О нас</NavItem>
              <NavItem>Контакты</NavItem>
            </Nav>
          </Left>
          <Right>
            <div>
              <ItemsTitle>Ташкент</ItemsTitle>
              <Items>
                <Location>Chisinau,15/2 Trandafirilor Str.</Location>
                <Phone>+373 68 159 759</Phone>
                <Gmail>hello@amatto.md</Gmail>
              </Items>
            </div>
            <div>
              <ItemsTitle>Наманган</ItemsTitle>
              <Items>
                <Location>Chisinau,15/2 Trandafirilor Str.</Location>
                <Phone>+373 68 159 759</Phone>
                <Gmail>hello@amatto.md</Gmail>
              </Items>
            </div>
            <div>
              <ItemsTitle>Андижон</ItemsTitle>
              <Items>
                <Location>Chisinau,15/2 Trandafirilor Str.</Location>
                <Phone>+373 68 159 759</Phone>
                <Gmail>hello@amatto.md</Gmail>
              </Items>
            </div>
            <div>
              <ItemsTitle>Фаргэна</ItemsTitle>
              <Items>
                <Location>Chisinau,15/2 Trandafirilor Str.</Location>
                <Phone>+373 68 159 759</Phone>
                <Gmail>hello@amatto.md</Gmail>
              </Items>
            </div>
            <div>
              <ItemsTitle>Самаркант</ItemsTitle>
              <Items>
                <Location>Chisinau,15/2 Trandafirilor Str.</Location>
                <Phone>+373 68 159 759</Phone>
                <Gmail>hello@amatto.md</Gmail>
              </Items>
            </div>
            <div>
              <ItemsTitle>Навоий</ItemsTitle>
              <Items>
                <Location>Chisinau,15/2 Trandafirilor Str.</Location>
                <Phone>+373 68 159 759</Phone>
                <Gmail>hello@amatto.md</Gmail>
              </Items>
            </div>
          </Right>
        </FooterWrapper>

        <Copyright>© 2024 Amatto. All Rights Reserved.</Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;
