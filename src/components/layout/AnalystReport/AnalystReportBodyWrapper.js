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
      <AnalystReportCommentInput />
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 60px;
  padding: 20px 20px 94px 20px;
  height: 100%;
  overflow-y: auto;
`;

export default AnalystReportBodyWrapper;
