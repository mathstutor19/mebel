import React from 'react';
import spinner from '../../assets/icons/loader.svg';
import { Wrapper } from './Loader.styled';
const Loader = () => {
  return (
    <Wrapper>
      <img src={spinner} alt="Loading..." />
    </Wrapper>
  );
};

export default Loader;
