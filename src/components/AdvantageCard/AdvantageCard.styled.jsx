import styled from 'styled-components';

export const Article = styled.article`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 10px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.15);
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const Title = styled.h3`
  color: #39373a;
  text-align: center;
  font-family: Playfair Display;
  font-size: 22px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Text = styled.p`
  color: #39373a;
  text-align: center;
  font-weight: 400;
  text-transform: capitalize;
`;
