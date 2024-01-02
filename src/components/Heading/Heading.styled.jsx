import styled from 'styled-components';
export const Title = styled.h2`
  color: #39373a;
  text-align: center;
  font-family: Playfair Display;
  font-size: 43px;
  font-weight: 600;
  position: relative;
  @media (max-width: 678px) {
    font-size: 25px;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: -14px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background: #ffcc29;
  }
`;
