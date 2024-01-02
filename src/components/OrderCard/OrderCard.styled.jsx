import styled from 'styled-components';
import plus from '../../assets/icons/plus.svg';
import minus from '../../assets/icons/minus.svg';
export const Article = styled.article`
  width: 100%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.15);
  height: 400px;
  position: relative;
  transition: all 0.6s ease-in-out;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.1);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Name = styled.h3`
  color: #39373a;
  font-family: Playfair Display;
  font-size: 35px;
  font-weight: 700;
  text-transform: capitalize;
  position: absolute;
  bottom: 45px;
  left: 20px;
  z-index: 10;
`;

export const Cost = styled.p`
  color: #39373a;
  font-size: 20px;
  font-weight: 300;
  text-transform: lowercase;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;
export const Plus = styled.button`
  background-image: url(${plus});
  width: 40px;
  height: 40px;
  position: absolute;
  right: 70px;
  bottom: 20px;
  z-index: 10;
  border: none;
  background-color: transparent;
`;

export const Minus = styled.button`
  background-image: url(${minus});
  background-repeat: no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 10;
  border: none;
  background-color: transparent;
`;
