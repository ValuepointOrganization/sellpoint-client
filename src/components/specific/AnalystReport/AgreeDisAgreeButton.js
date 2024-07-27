import React from "react";
import { Flex, Image, Text } from "../../common/Index";

const AgreeDisAgreeButton = ({ image, children, number }) => {
  return (
    <Flex direction="column" alignItems="center" gap="8px">
      <Image src={image} alt={children} width="18px" height="18px" />
      <Text
        fontSize="12px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="22px"
        color="#D5D5D5"
      >
        {children}
      </Text>
      <Text
        fontSize="12px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="22px"
        color="#D5D5D5"
      >
        {number}
      </Text>
    </Flex>
  );
};

export default AgreeDisAgreeButton;
