import React from "react";

import { Flex, Text } from "../../common/Index";

const LoginTextContainer = () => {
  return (
    <Flex
      direction="column"
      gap="8px"
      justifyContent="center"
      alignItems="center"
      style={{ width: "100%" }}
    >
      <Text
        fontSize="24px"
        fontWeight="700"
        lineHeight="160%"
        color="#000"
        textAlign="center"
      >
        Sellpoint 시작하기
      </Text>
      <Flex justifyContent="center" alignItems="flex-start" gap="8px">
        <Text
          color="#BABABF"
          fontSize="14px"
          fontWeight="600"
          lineHeight="160%"
        >
          계정이 없으신가요?
        </Text>
        <Text
          color="#717FFE"
          fontSize="14px"
          fontWeight="600"
          lineHeight="160%"
          cursor="pointer"
          style={{ textDecorationLine: "underline" }}
        >
          가입하기
        </Text>
      </Flex>
    </Flex>
  );
};

export default LoginTextContainer;
