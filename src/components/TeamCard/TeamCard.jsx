import React from 'react';
import { About, Article, ImageWrapper, Job, Name } from './TeamCard.styled';

const TeamCard = ({ name, about, job, image }) => {
  return (
    <Article>
      <ImageWrapper>
        <img src={image} alt={name} />
      </ImageWrapper>
      <Name>{name}</Name>
      <Job>{job}</Job>
      <About>{about}</About>
    </Article>
  );
};

export default TeamCard;
