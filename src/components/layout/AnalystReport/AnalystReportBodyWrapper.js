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
        padding: "20px 20px 100px 20px",
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
