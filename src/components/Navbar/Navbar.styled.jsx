import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Nav = styled.nav`
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.15);
  max-height: 80px;
`;

export const NavWrapper = styled.nav`
  position: relative;
  padding: 26px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 80px;
  @media (max-width: 992px) {
    padding: 10px 0px;
  }
`;

export const NavbarItems = styled.ul`
  display: flex;
  gap: 68px;
  @media (max-width: 1280px) {
    gap: 30px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavbarLink = styled(NavLink)`
  color: #39373a;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  position: relative;
`;

export const Button = styled.a`
  border-radius: 40px;
  background: #ffcc29;
  padding: 16px 40px;
  color: #39373a;
  font-size: 18px;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  width: 24px;
  display: none;
  transition: all 0.4s ease-in-out;

  @media (max-width: 992px) {
    display: block;
  }
`;

export const Select = styled.select`
  padding: 8px 14px 8px 0;
  border-radius: 3px;
  border: 2px solid #ffcc29;
  margin-left: 10px;
  &:focus {
    border: 2px solid #ffcc29;
  }
  &:hover {
    border: 2px solid #ffcc29;
  }
  &:active {
    border: 2px solid #ffcc29;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export const SmallMenu = styled.div`
  position: absolute;
  left: 30px;
  position: absolute;
  z-index: 10;
  left: -30px;
  padding: 25px 0px 0px 50px;
  top: 75px;
  flex-direction: column;
  width: 280px;
  height: 81vh;
  background: #f9f9f9;
  @media (min-width: 992px) {
    display: none;
  }
  @media (max-width: 576px) {
    // width: 100%;
  }
`;

export const SmallNavbarItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const SmallButton = styled.a`
  border-radius: 40px;
  background: #ffcc29;
  padding: 16px 40px;
  color: #39373a;
  font-size: 18px;
  display: inline-block;
  margin-top: 20px;
`;

export const SmallSelect = styled.select`
  padding: 8px 14px 8px 0;
  border-radius: 3px;
  border: 2px solid #ffcc29;
  margin-top: 30px;
  &:focus {
    border: 2px solid #ffcc29;
  }
  &:hover {
    border: 2px solid #ffcc29;
  }
  &:active {
    border: 2px solid #ffcc29;
  }
`;
