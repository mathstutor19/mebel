import styled from 'styled-components';
import phone from '../../assets/icons/phone.svg';
import location from '../../assets/icons/location.svg';
import gmail from '../../assets/icons/gmail.svg';
export const Wrapper = styled.footer`
  padding: 53px 0px 27px;
  background: #f9f9f9;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 300px;
`;

export const Image = styled.img`
  max-width: 250px;
`;

export const Socials = styled.ul`
  display: flex;
  column-gap: 13px;
`;

export const SocialItem = styled.li`
  width: 31px;
  height: 31px;
  background-color: #ffcc29;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const NavItem = styled.li`
  color: #39373a;
  font-weight: 400;
  text-transform: capitalize;
`;

export const Right = styled.div`
  width: calc(100%-300px);
  /* display: flex;
  justify-content: space-between; */
  /* flex-wrap: wrap; */
  display: grid;
  justify-items: center;
  gap: 30px 100px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 576px) {
    margin-left: -70px;
  }
`;

export const ItemsTitle = styled.h3`
  color: #39373a;
  font-family: Playfair Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  margin-bottom: 20px;
  position: relative;
  &::before {
    content: '';
    width: 49px;
    height: 3px;
    background: #ffcc29;
    position: absolute;
    bottom: -7px;
  }
`;

export const Items = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const Location = styled.li`
  color: #39373a;
  font-family: Commissioner;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  position: relative;
  padding-left: 33px;
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    background-image: url(${location});
    background-position: center;
    position: absolute;
    left: 0px;
  }
`;

export const Phone = styled.li`
  color: #39373a;
  font-family: Commissioner;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  position: relative;
  padding-left: 33px;
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    background-image: url(${phone});
    background-position: center;
    position: absolute;
    left: 0px;
  }
`;

export const Gmail = styled.li`
  color: #39373a;
  font-family: Commissioner;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  position: relative;
  padding-left: 33px;
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    background-image: url(${gmail});
    background-position: center;
    position: absolute;
    left: 0px;
  }
`;

export const Copyright = styled.div`
  color: #39373a;
  font-family: Commissioner;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: center;
  margin-top: 20px;
`;
