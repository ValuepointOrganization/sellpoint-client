import React from "react";

import { Flex, Text } from "../../common/Index";

const StockItemContainer = ({ stock }) => {
  return (
    <Flex justifyContent="space-between" style={{ padding: "12px 0px" }}>
      <Flex flexDirection="column">
        <Text fontWeight="bold">{stock.STOCK_NAME}</Text>
        <Text>{stock.STOCK_CODE}</Text>
      </Flex>
      <Flex flexDirection="column" alignItems="flex-end">
        <Text>{stock.CURRENT_PRICE}</Text>
        <Text color={stock.PRICE_CHANGE_RATE >= 0 ? "green" : "red"}>
          {stock.PRICE_CHANGE_RATE}%
        </Text>
      </Flex>
    </Flex>
  );
};

export default StockItemContainer;
