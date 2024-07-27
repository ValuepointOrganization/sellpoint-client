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
      <CommentInputWrapper>
        <AnalystReportCommentInput />
      </CommentInputWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  width: 393px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ScrollableContent = styled(Flex)`
  flex: 1;
  overflow-y: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 60px;
  padding: 20px 20px 0 20px;
`;

const CommentInputWrapper = styled.div`
  width: 100%;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px -10px 40px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16px);
`;

export default AnalystReportBodyWrapper;
