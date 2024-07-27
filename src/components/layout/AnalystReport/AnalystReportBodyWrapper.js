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
      <ScrollableContent>
        <AnalystReportBodyReportContent />
        <AnalystReportBodyAgree />
        <AnalystReportBodyComment />
      </ScrollableContent>
      <AnalystReportCommentInput />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 56px - 74px); // Subtracting header height and comment input height
  overflow: hidden;
`;

const ScrollableContent = styled(Flex)`
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 60px;
  padding: 20px 20px 74px 20px; // Added bottom padding to account for comment input
`;

export default AnalystReportBodyWrapper;
