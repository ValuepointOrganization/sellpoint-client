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
  width: 393px;
  height: 100vh;
  overflow: hidden;
`;

const ScrollableContent = styled(Flex)`
  height: calc(
    100% - 60px
  ); // Adjust this value based on the height of your CommentInput
  overflow-y: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 60px;
  padding: 20px 20px 0 20px;
`;

export default AnalystReportBodyWrapper;
