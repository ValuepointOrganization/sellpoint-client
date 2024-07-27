import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent || props.justify || "flex-start"};
  align-items: ${(props) => props.alignItems || props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || "0"};
  ${(props) => props.style && Object.entries(props.style).map(([key, value]) => `${key}: ${value};`).join('')}
`;

const Flex = ({ children, ...props }) => {
  return <StyledFlex {...props}>{children}</StyledFlex>;
};

export default Flex;
