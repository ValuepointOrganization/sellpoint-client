import React from "react";
import styled from "styled-components";

import { Flex, Text } from "../../common/Index";

import { ReactComponent as MicrosoftLogo } from "../../../assets/image/MicrosoftLogo.svg";
import ShareBtn from "../ShareBtn";
const StockDetailStockHeader = () => {
  return (
    <Flex justify="space-between" align="center" style={{ width: "100%", height: "40px" }}>
      <Flex gap="16px" align="center">
        <MicrosoftLogo width="30" height="30" />
        <Flex
          direction="column"
          align="flex-start"
          gap="5px"
        >
          <Text
            color="#2e3032"
            lineHeight="20px"
            style={{ letterSpacing: "-0.084px" }}
          >
            Microsoft
          </Text>
          <Text
            color="#AEAEAE"
            fontSize="12px"
            fontWeight="400"
            lineHeight="16px"
          >
            MSFT
          </Text>
        </Flex>
      </Flex>
      <ShareBtn />
    </Flex>
  );
};

export default StockDetailStockHeader;
