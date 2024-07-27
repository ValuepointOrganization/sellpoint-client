import React from "react";
import { Flex, Image, Text } from "../../common/Index";

const AgreeDisAgreeButton = ({ image, text, number }) => {
  return (
    <Flex flexDirection="column" alignItems="center" gap="8px">
      <Image src={image} alt={text} width="24px" height="24px" />
      <Text>{text}</Text>
      <Text>{number}</Text>
    </Flex>
  );
};

export default AgreeDisAgreeButton;
