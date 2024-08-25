import React from "react";

import { Flex, Text } from "../../common/Index";

const StockDetailStockPrice = ({ stockPrice, flucPrice, flucRate, market }) => {
  return (
    <Flex direction="column" gap="5px" align="flex-start">
      <Text
        fontSize="36px"
        fontWeight="700"
        lineHeight="44px"
        style={{ letterSpacing: "-0.792px" }}
      >
        ₩ {stockPrice}
      </Text>
      <Text
        color={parseFloat(flucRate) < 0 ? "#3182F6" : "#ff3b30"}
        fontSize="16px"
        fontWeight="500"
        lineHeight="24px"
        style={{ letterSpacing: "-0.176px" }}
      >
        {flucPrice} ({flucRate}%)
      </Text>
    </Flex>
  );
};

export default StockDetailStockPrice;
