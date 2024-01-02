import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 0px;
  text-align: center;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 70px;
  text-align: left;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Button = styled(Link)`
  border-radius: 40px;
  background: #ffcc29;
  padding: 16px 83px;
  color: #39373a;
  font-size: 18px;
  display: inline-flex;
  margin-top: 60px;
`;
