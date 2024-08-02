import React from "react";
import styled from "styled-components";

const StyledText = styled.span`
  color: ${(props) => props.color || "#000"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-style: ${(props) => props.fontStyle || "normal"};
  font-weight: ${(props) => props.fontWeight || "600"};
  line-height: ${(props) => props.lineHeight || "140%"};
  ${(props) =>
    props.style &&
    Object.entries(props.style)
      .map(([key, value]) => `${key}: ${value};`)
      .join("")}
`;

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
