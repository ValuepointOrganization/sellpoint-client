import React from "react";
import styled from "styled-components";
import { Flex } from "../../common/Index";

import AnalystReportBodyReportContent from "./AnalystReportBodyReportContent";
import AnalystReportBodyAgree from "./AnalystReportBodyAgree";
import AnalystReportBodyComment from "./AnalystReportBodyComment";
import AnalystReportCommentInput from "./AnalytReportCommentInput";

const AnalystReportBodyWrapper = () => {
  return (
    <StyledWrapper>
      <AnalystReportBodyReportContent />
      <AnalystReportBodyAgree />
      <AnalystReportBodyComment />
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 60px;
  padding: 20px 20px 94px 20px; // Increased bottom padding to account for comment input
  height: calc(100vh - 56px); // Subtract header height
  overflow-y: auto;
`;

export default AnalystReportBodyWrapper;
