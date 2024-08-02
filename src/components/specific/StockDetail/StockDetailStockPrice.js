import React from "react";
import styled from "styled-components";

import { Flex, Text } from "../../common/Index";

const StockDetailStockPrice = () => {
  return (
    <Flex direction="column" gap="5px" align="flex-start">
      <Text
        fontSize="36px"
        fontWeight="700"
        lineHeight="44px"
        style={{ letterSpacing: "-0.792px" }}
      >
        $ 411.42
      </Text>
      <Text
        color="#ff3b30"
        fontSize="16px"
        fontWeight="500"
        lineHeight="24px"
        style={{ letterSpacing: "-0.176px" }}
      >
        +1.68 (0.41%)
      </Text>
    </Flex>
  );
};

export default StockDetailStockPrice;
