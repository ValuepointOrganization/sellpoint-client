import React from "react";
import ReportHeader from "../components/layout/AnalystReport/AnalystReportHeader";
import AnalystReportBodyWrapper from "../components/layout/AnalystReport/AnalystReportBodyWrapper";
import AnalystReportCommentInput from "../components/layout/AnalystReport/AnalytReportCommentInput";

import styled from "styled-components";

import useKeyboardAdjustments from "../hooks/useKeyboardAdjustments";
const AnalystReport = () => {
  useKeyboardAdjustments();
  return (
    <PageWrapper>
      <ReportHeader />
      <AnalystReportBodyWrapper />
      <AnalystReportCommentInput />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  position: relative;
  width: 393px;
  height: 100%;
  overflow: hidden;
  overflow-behavior: contain;
`;

export default AnalystReport;
