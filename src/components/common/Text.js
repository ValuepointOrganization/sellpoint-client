import React from "react";
import styled from "styled-components";

const StyledText = styled.span`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
