import React from 'react';
import { useTranslation } from 'react-i18next';
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
  Select,
  SmallButton,
  SmallMenu,
  SmallNavbarItems,
  SmallSelect,
} from './Navbar.styled';
import { useState } from 'react';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // const [selectLanguage, setSelectLanguage] = useState(true);
  const { i18n, t } = useTranslation();

  const OpenMenuClick = () => {
    setOpenMenu((prev) => !prev);
  };
  const LANGUAGES = [
    { label: 'Uzbek', code: 'uz' },
    { label: 'Russian', code: 'ru' },
  ];
  const onChangeLang = (event) => {
    const lang_code = event.target.value;
    i18n.changeLanguage(lang_code);
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
              <NavbarLink to="/">{t('home')}</NavbarLink>
            </li>
            <li>
              <NavbarLink to="/works">{t('ourWork')}</NavbarLink>
            </li>
            <li>
              <NavbarLink to="/order">{t('order')}</NavbarLink>
            </li>
            <li>
              <NavbarLink to="/about">{t('about')}</NavbarLink>
            </li>
            <li>
              <NavbarLink to="/contact">{t('contact')}</NavbarLink>
            </li>
          </NavbarItems>
          <div>
            <Button>+373 68 159 759</Button>
            <Select defaultValue={'uz'} onChange={onChangeLang}>
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </Select>
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
                  <NavbarLink to="/">{t('home')}</NavbarLink>
                </li>
                <li>
                  <NavbarLink to="/works">{t('ourWork')}</NavbarLink>
                </li>
                <li>
                  <NavbarLink to="/order">{t('order')}</NavbarLink>
                </li>
                <li>
                  <NavbarLink to="/about">{t('about')}</NavbarLink>
                </li>
                <li>
                  <NavbarLink to="/contact">{t('contact')}</NavbarLink>
                </li>
              </SmallNavbarItems>
              <div>
                <SmallButton>+373 68 159 759</SmallButton>
                <SmallSelect defaultValue={'uz'} onChange={onChangeLang}>
                  {LANGUAGES.map(({ code, label }) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </SmallSelect>
              </div>
            </SmallMenu>
          )}
        </NavWrapper>
      </Container>
    </Nav>
  );
};

export default Navbar;
