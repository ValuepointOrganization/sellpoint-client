import React from "react";
import { Flex, Image, Text } from "../../common/Index";

const AgreeDisAgreeButton = ({ image, children, number, isActive, onClick }) => {
  const activeColor = "#717FFE";
  const inactiveColor = "#D5D5D5";

  return (
    <Flex direction="column" alignItems="center" gap="8px" onClick={onClick} style={{ cursor: 'pointer' }}>
      <Image src={image} alt={children} width="18px" height="18px" />
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
