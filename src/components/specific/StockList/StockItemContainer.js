import React from "react";

import { Flex, Text } from "../../common/Index";
import { ReactComponent as PriceDownArrow } from "../../../assets/image/PriceDownArrow.svg";
import { ReactComponent as PriceUpArrow } from "../../../assets/image/PriceUpArrow.svg";
import { formatNumberString } from "../../../utils/stringUtils";
import { useNavigate } from "react-router-dom";
const StockItemContainer = ({ stock }) => {
  const navigate = useNavigate();
  console.log(stock);
  const isPriceUp = stock.FLUC_RATE >= 0;
  const PriceChangeIcon = isPriceUp ? PriceUpArrow : PriceDownArrow;
  const priceColor = isPriceUp ? "#FF3B30" : "#3182F6";
  const priceText = formatNumberString(stock.PRICE);
  const flucText = isPriceUp
    ? stock.FLUC_RATE
    : stock.FLUC_RATE.replace(/-/g, "");

  return (
    <Flex
      justifyContent="space-between"
      direction="row"
      style={{ padding: "12px 0px", width: "100%", height: "46px" }}
    >
      <Flex direction="column" gap="4px" style={{ width: "100%" }}>
        <Text
          color="#000"
          fontSize="16px"
          fontWeight="500"
          lineHeight="140%"
          onClick={() => navigate(`/stock/${stock.STOCK_ID}`)}
        >
          {stock.STOCK_NAME}
        </Text>
        <Text
          color="#5F676F"
          fontSize="12px"
          fontWeight="400"
          lineHeight="140%"
        >
          {stock.CODE}
        </Text>
      </Flex>
      <Flex
        direction="column"
        alignItems="flex-end"
        gap="4px"
        style={{ width: "60px" }}
      >
        <Text
          color="#000"
          fontSize="16px"
          fontWeight="500"
          lineHeight="140%"
          style={{ letterSpacing: "0.32px" }}
        >
          ₩{priceText}
        </Text>
        <Flex alignItems="center">
          <PriceChangeIcon />
          <Text
            fontSize="12px"
            fontWeight="500"
            lineHeight="140%"
            color={priceColor}
          >
            {flucText}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StockItemContainer;
