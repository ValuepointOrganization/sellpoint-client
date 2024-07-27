import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  padding: ${props => props.padding || '1rem'};
  margin: ${props => props.margin || '0'};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || '0'};
  background: ${props => props.background || 'transparent'};
  box-shadow: ${props => props.boxShadow || 'none'};
`;

const Box = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};

export default Box;
