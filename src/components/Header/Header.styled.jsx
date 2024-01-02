import styled from 'styled-components';
import bg from '../../assets/images/header-bg.png';
import heart from '../../assets/icons/heart.svg';

export const Head = styled.header`
  display: flex;
  flex-direction: column;
  gap: 17px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;
`;

export const Title = styled.h1`
  font-family: Playfair Display;
  font-size: 70px;
  font-weight: 800;
  padding-top: 265px;
  text-align: center;
  @media (max-width: 678px) {
    font-size: 32px;
  }
`;

export const Text = styled.h1`
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  @media (max-width: 678px) {
    font-size: 16px;
  }
`;

export const Items = styled.ul`
  margin: auto;
`;

export const Item = styled.li`
  color: #fff;
  font-family: Commissioner;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 17px;
  position: relative;
  &::before {
    content: '';
    width: 22px;
    height: 22px;
    background-image: url(${heart});
    position: absolute;
    left: -40px;
  }
  span {
    color: #ffcc29;
  }
`;

export const Button = styled.button`
  color: #39373a;
  font-family: Commissioner;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  border-radius: 40px;
  background: #ffcc29;
  padding: 20px 25px;
  border: none;
  margin: 31px auto 208px;
  @media (max-width: 576px) {
    padding: 15px;
  }
`;
