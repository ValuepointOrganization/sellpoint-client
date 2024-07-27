import React from "react";

import { Flex } from "../../common/Index";

import AnalystReportBodyReportContent from "./AnalystReportBodyReportContent";
import AnalystReportBodyAgree from "./AnalystReportBodyAgree";
import AnalystReportBodyComment from "./AnalystReportBodyComment";
import AnalystReportCommentInput from "./AnalytReportCommentInput";

const AnalystReportBodyWrapper = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      gap="60px"
      style={{
        width: "393px",
        padding: "20px 20px 120px 20px", // Increased bottom padding
      }}
    >
      <AnalystReportBodyReportContent />
      <AnalystReportBodyAgree />
      <AnalystReportBodyComment />
      <AnalystReportCommentInput />
    </Flex>
  );
};

export default AnalystReportBodyWrapper;
