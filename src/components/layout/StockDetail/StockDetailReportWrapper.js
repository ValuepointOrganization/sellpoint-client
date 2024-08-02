import React, { useState } from "react";
import { Flex } from "../../common/Index";

import StockDetailReportSelect from "../../specific/StockDetail/StockDetailReportSelect";
import StockDetailReportBrief from "../../specific/StockDetail/StockDetailReportBrief";

const StockDetailReportWrapper = () => {
  const [reportType, setReportType] = useState("analyst");

  return (
    <Flex
      align="flex-start"
      gap="20px"
      direction="column"
      style={{ padding: "0px 20px 100px 20px" }}
    >
      <StockDetailReportSelect reportType={reportType} setReportType={setReportType} />
      <StockDetailReportBrief reportType={reportType} />
    </Flex>
  );
};

export default StockDetailReportWrapper;
