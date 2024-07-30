import React from "react";
import styled from "styled-components";

import { Flex } from "../../common/Index";

import StockDetailStockHeader from "../../specific/StockDetail/StockDetailStockHeader";

const StockDetailStockWrapper = () => {
  return (
    <Flex
      direction="column"
      align="flex-start"
      gap="32px"
      style={{ alignSelf: "stretch", padding: "0px 20px" }}
    >
      <StockDetailStockHeader />
    </Flex>
  );
};

export default StockDetailStockWrapper;
