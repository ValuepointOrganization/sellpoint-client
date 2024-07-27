import React from "react";
import ReportHeader from "../components/layout/AnalystReport/AnalystReportHeader";
import AnalystReportBodyWrapper from "../components/layout/AnalystReport/AnalystReportBodyWrapper";
import styled from "styled-components";

const AnalystReport = () => {
  return (
    <PageWrapper>
      <ReportHeader />
      <AnalystReportBodyWrapper />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 100vh;
  overflow: hidden;
`;

export default AnalystReport;
