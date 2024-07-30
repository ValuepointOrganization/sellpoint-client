import React from "react";
import styled from "styled-components";

import { Flex } from "../../common/Index";

import StockDetailStockHeader from "../../specific/StockDetail/StockDetailStockHeader";
import StockDetailStockPrice from "../../specific/StockDetail/StockDetailStockPrice";
import StockDetailStockChart from '../../specific/StockDetail/StockDetailStockChart';

const StockDetailStockWrapper = () => {
  return (
    <Flex
      direction="column"
      align="flex-start"
      gap="32px"
      style={{ width: "100%", padding: "0px 20px" }}
    >
      <StockDetailStockHeader />
      <StockDetailStockPrice />
      <StockDetailStockChart />
    </Flex>
  );
};

export default StockDetailStockWrapper;
