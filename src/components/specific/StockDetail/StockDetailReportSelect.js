import React from "react";
import { Flex, Text } from "../../common/Index";

const StockDetailReportSelect = () => {
  return (
    <Flex justify="space-between" alignItems="flex-start">
      <Flex
        padding="14px 0px"
        justifyContent="center"
        alignItems="center"
        gap="10px"
        style={{ flex: "1 0 0" }}
      >
        <Text fontSize="16px" lineHeight="160%">
          애널리스트
        </Text>
      </Flex>
      <Flex
        padding="14px 0px"
        justifyContent="center"
        alignItems="center"
        gap="10px"
        style={{ flex: "1 0 0" }}
      >
        <Text fontSize="16px" lineHeight="160%">
          유저
        </Text>
      </Flex>
    </Flex>
  );
};

export default StockDetailReportSelect;
