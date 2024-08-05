import React, { useState } from "react";
import { Flex } from "../../common/Index";

import StockDetailReportSelect from "../../specific/StockDetail/StockDetailReportSelect";
import StockDetailReportBrief from "../../specific/StockDetail/StockDetailReportBrief";
import ReportSearchBar from "../../specific/ReportSearchBar";
const StockDetailReportWrapper = () => {
  const [reportType, setReportType] = useState("analyst");

  return (
    <React.Fragment>
      <Flex
        style={{
          padding: "0px 20px 0px 20px",
        }}
      >
        <StockDetailReportSelect
          reportType={reportType}
          setReportType={setReportType}
        />
      </Flex>
      <Flex
        align="flex-start"
        gap="20px"
        direction="column"
        style={{
          padding: "0px 20px 100px 20px",
          background: "#FAFAFA;",
        }}
      >
        <StockDetailReportBrief reportType={reportType} />
        <ReportSearchBar
          placeholder="애널리스트를 검색하세요."
          style={{ border: "1px #E6E9ED" }}
        />
      </Flex>
    </React.Fragment>
  );
};

export default StockDetailReportWrapper;
