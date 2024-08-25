import React from "react";
import { Flex, Text } from "../../common/Index";
import { ReactComponent as MicrosoftLogo } from "../../../assets/image/MicrosoftLogo.svg";
import ShareBtn from "../ShareBtn";

const StockDetailStockHeader = ({ stockName, stockCode }) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      style={{ width: "100%", height: "40px" }}
    >
      <StockInfo stockName={stockName} stockCode={stockCode} />
      <ShareBtn />
    </Flex>
  );
};

const StockInfo = ({ stockName, stockCode }) => (
  <Flex gap="16px" align="center">
    <MicrosoftLogo width="30" height="30" />
    <StockText stockName={stockName} stockCode={stockCode} />
  </Flex>
);

const StockText = ({ stockName, stockCode }) => (
  <Flex direction="column" align="flex-start" gap="5px">
    <Text
      color="#2e3032"
      lineHeight="20px"
      style={{ letterSpacing: "-0.084px" }}
    >
      {stockName}
    </Text>
    <Text color="#AEAEAE" fontSize="12px" fontWeight="400" lineHeight="16px">
      {stockCode}
    </Text>
  </Flex>
);

export default StockDetailStockHeader;
