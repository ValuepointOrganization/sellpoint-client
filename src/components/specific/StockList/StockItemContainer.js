import React from "react";

import { Flex, Text } from "../../common/Index";

const StockItemContainer = ({ stock }) => {
  console.log(stock);
  return (
    <Flex
      justifyContent="space-between"
      width="353px"
      height="377px"
      direction="row"
      style={{ padding: "12px 0px", width: "100%", height: "377px" }}
    >
      <Flex direction="column" gap="4px">
        <Text color="#000" fontSize="16px" fontWeight="500" lineHeight="140%">
          {stock.STOCK_NAME}
        </Text>
        <Text></Text>
      </Flex>
    </Flex>
  );
};

export default StockItemContainer;
