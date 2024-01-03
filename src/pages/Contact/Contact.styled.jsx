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
  text-align: center;
  flex: 0 0 600px;
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Input = styled.input`
  width: 360px;
  height: 60px;
  border-radius: 20px;
  border: 1px solid #b0b0b0;
  padding-left: 21px;
  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
  }
`;

export const Textarea = styled.textarea`
  width: 750px;
  height: 113px;
  border-radius: 20px;
  border: 1px solid #b0b0b0;
  padding: 21px;
  resize: none;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 16px 44px;
  border-radius: 40px;
  background: #ffcc29;
  border: none;
  color: #39373a;
  font-size: 18px;
  line-height: normal;
`;

export const Right = styled.div`
  max-width: 500px;
  @media (max-width: 1280px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
