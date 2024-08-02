import React from "react";
import { Flex, Text } from "../../common/Index";

const StockDetailReportBrief = () => {
  return (
    <Flex gap="20px" style={{ paddingTop: "20px" }}>
      <Text fontSize="16px" lineHeight="160%">
        애널리스트 리포트 (160)
      </Text>
      <Flex gap="10px" style={{ padding: "20px 0px" }}></Flex>
    </Flex>
  );
};

export default StockDetailReportBrief;
