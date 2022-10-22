import React from 'react';
import Wrapper from './Container.styled';

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
