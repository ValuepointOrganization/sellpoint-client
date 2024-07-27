import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

const Image = ({ src, alt, ...props }) => {
  return <StyledImage src={src} alt={alt} {...props} />;
};

export default Image;
