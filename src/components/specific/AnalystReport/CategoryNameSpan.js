import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  color: #8C8C8C;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
`;

const CategoryNameSpan = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default CategoryNameSpan;
