import styled from 'styled-components';

export const Section = styled.section`
  padding: 30px 0px 66px;
  @media (max-width: 768px) {
    padding: 30px 0px 30px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  margin-top: 100px;
`;
