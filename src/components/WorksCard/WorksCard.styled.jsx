import styled from 'styled-components';

export const Article = styled.article`
  width: 100%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.15);
  height: 400px;
  position: relative;
  transition: all 0.4s ease-in-out;
  &:hover {
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0.07%,
        #39373a 99.93%
      );
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h3`
  color: #fff;
  font-family: Playfair Display;
  font-size: 35px;
  font-weight: 700;
  text-transform: capitalize;
  position: absolute;
  bottom: 100px;
  left: 20px;
`;

export const TextWrapper = styled.div`
  border-radius: 0px 10px 10px 0px;
  background: rgba(0, 0, 0, 0.6);
  width: 255px;
  height: 68px;
  margin-top: 7px;
  padding-left: 20px;
  position: absolute;
  bottom: 30px;
`;

export const Text = styled.p`
  color: #ffcc29;
  font-size: 32px;
  font-weight: 600;
  text-transform: capitalize;
  span {
    color: #fff;
    font-size: 15px;
    font-weight: 300;
    text-transform: capitalize;
  }
`;

export const SupText = styled.p`
  color: rgba(255, 255, 255, 0.69);
  font-size: 14px;
  font-weight: 300;
  text-transform: lowercase;
`;
