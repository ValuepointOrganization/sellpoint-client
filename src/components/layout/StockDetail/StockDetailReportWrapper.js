import React from "react";
import { Flex } from "../../common/Index";

import StockDetailReportSelect from "../../specific/StockDetail/StockDetailReportSelect";

const StockDetailReportWrpper = () => {
  return (
    <Flex
      align="felx-start"
      gap="20px"
      direction="column"
      style={{ padding: "20px 20px 100px 20px" }}
    >
      <StockDetailReportSelect />
    </Flex>
  );
};

export default StockDetailReportWrpper;
