import React from "react";
import { Flex } from "../../common/Index";

import StockDetailReportSelect from "../../specific/StockDetail/StockDetailReportSelect";
import StockDetailReportBrief from "../../specific/StockDetail/StockDetailReportBrief";
const StockDetailReportWrpper = () => {
  return (
    <Flex
      align="felx-start"
      gap="20px"
      direction="column"
      style={{ padding: "0px 20px 100px 20px" }}
    >
      <StockDetailReportSelect />
      <StockDetailReportBrief />
    </Flex>
  );
};

export default StockDetailReportWrpper;
