import React from "react";
import { Flex, Text } from "../../common/Index";
import styled from "styled-components";

const StyledSVG = styled.svg`
  fill: ${props => props.isActive ? "#717FFE" : "#D5D5D5"};
`;

const AgreeDisAgreeButton = ({ icon, children, number, isActive, onClick }) => {
  const activeColor = "#717FFE";
  const inactiveColor = "#D5D5D5";

  return (
    <Flex direction="column" alignItems="center" gap="8px" onClick={onClick} style={{ cursor: 'pointer' }}>
      <StyledSVG
        width="18"
        height="18"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
        isActive={isActive}
      >
        {icon}
      </StyledSVG>
      <Text
        fontSize="12px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="22px"
        color={isActive ? activeColor : inactiveColor}
      >
        {children}
      </Text>
      <Text
        fontSize="12px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="22px"
        color={isActive ? activeColor : inactiveColor}
      >
        {number}
      </Text>
    </Flex>
  );
};

export default AgreeDisAgreeButton;
