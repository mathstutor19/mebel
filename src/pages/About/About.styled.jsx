import styled from 'styled-components';

export const Section = styled.div`
  padding: 80px 0px;
  @media (max-width: 768px) {
    padding: 50px 0px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 0 0 600px;
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

export const Text = styled.p`
  color: #39373a;
  font-size: 18px;
`;

export const Right = styled.div`
  max-width: 600px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
