import React from "react";
import Flex from "../../common/Flex";
import AnalystReportBodyReportContent from "./AnalystReportBodyReportContent";
import AnalystReportBodyAgree from "./AnalystReportBodyAgree";

const AnalystReportBodyWrapper = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      gap="60px"
      style={{
        width: "393px",
        padding: "20px 20px 100px 20px",
      }}
    >
      <AnalystReportBodyReportContent />
      <AnalystReportBodyAgree />
    </Flex>
  );
};

export default AnalystReportBodyWrapper;
