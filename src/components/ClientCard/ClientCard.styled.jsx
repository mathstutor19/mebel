import styled from 'styled-components';

export const Article = styled.article`
  width: 100%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.15);
  @media (max-width: 1280px) {
    &:nth-child(5) {
      display: none;
    }
  }
  @media (max-width: 992px) {
    &:nth-child(4) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    &:nth-child(4) {
      display: block;
    }
  }
  @media (max-width: 576px) {
    &:nth-child(4) {
      display: none;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const TextWrapper = styled.div`
  padding: 15px;
`;

export const Title = styled.h3`
  color: #39373a;
  font-family: Playfair Display;
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
  span {
    margin-right: 32px;
  }
`;

export const Text = styled.p`
  color: #39373a;
  font-weight: 400;
`;
