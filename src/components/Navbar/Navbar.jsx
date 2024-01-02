import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/icons/hamburger.svg';
import close from '../../assets/icons/close.svg';
import Container from '../Container/Container';
import {
  Button,
  Hamburger,
  Nav,
  NavbarItems,
  NavbarLink,
  NavWrapper,
  SmallButton,
  SmallMenu,
  SmallNavbarItems,
} from './Navbar.styled';
import { useState } from 'react';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const OpenMenuClick = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <Nav>
      <Container>
        <NavWrapper>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <NavbarItems>
            <li>
              <NavbarLink to="/">Главная</NavbarLink>
            </li>
            <li>
              <NavbarLink to="/works">Наши работы</NavbarLink>
            </li>
            <li>
              <NavbarLink to="/order">заказ</NavbarLink>
            </li>
            <li>
              <NavbarLink to="/about">о нас</NavbarLink>
            </li>
            <li>
              <NavbarLink to="/contact">контакты</NavbarLink>
            </li>
          </NavbarItems>
          <div>
            <Button>+373 68 159 759</Button>
          </div>
          <Hamburger>
            {openMenu === false ? (
              <img onClick={OpenMenuClick} src={hamburger} alt="hamburger" />
            ) : (
              <img onClick={OpenMenuClick} src={close} alt="close" />
            )}
          </Hamburger>
          {openMenu && (
            <SmallMenu onClick={OpenMenuClick}>
              <SmallNavbarItems>
                <li>
                  <NavbarLink to="/">Главная</NavbarLink>
                </li>
                <li>
                  <NavbarLink to="/works">Наши работы</NavbarLink>
                </li>
                <li>
                  <NavbarLink to="/order">заказ</NavbarLink>
                </li>
                <li>
                  <NavbarLink to="/about">о нас</NavbarLink>
                </li>
                <li>
                  <NavbarLink to="/contact">контакты</NavbarLink>
                </li>
              </SmallNavbarItems>
              <div>
                <SmallButton>+373 68 159 759</SmallButton>
              </div>
            </SmallMenu>
          )}
        </NavWrapper>
      </Container>
    </Nav>
  );
};

export default Navbar;
