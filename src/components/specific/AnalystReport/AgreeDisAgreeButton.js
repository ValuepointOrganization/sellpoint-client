import React, { useState } from "react";
import { Flex, Text } from "../../common/Index";
import StyledSVG from "../../common/StyledSVG";

const AgreeDisAgreeButton = ({ icon, children, number }) => {
  const [isActive, setIsActive] = useState(false);
  const activeColor = "#717FFE";
  const inactiveColor = "#D5D5D5";

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      gap="8px"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <StyledSVG
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill={isActive ? activeColor : inactiveColor}
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
