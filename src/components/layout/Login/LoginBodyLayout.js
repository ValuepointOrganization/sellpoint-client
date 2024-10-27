import React from "react";
import { Flex, Text } from "../../common/Index";

import LoginTextContainer from "../../specific/Login/LoginTextContainer";
const LoginBodyLayout = () => {
  return (
    <Flex
      direction="column"
      gap="32px"
      alignItems="flex-start"
      style={{ padding: "40px 20px" }}
    >
      <LoginTextContainer />
    </Flex>
  );
};

export default LoginBodyLayout;
