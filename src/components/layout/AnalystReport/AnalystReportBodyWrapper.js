import React from "react";
import styled from "styled-components";
import { Flex } from "../../common/Index";

import AnalystReportBodyReportContent from "./AnalystReportBodyReportContent";
import AnalystReportBodyAgree from "./AnalystReportBodyAgree";
import AnalystReportBodyComment from "./AnalystReportBodyComment";

const AnalystReportBodyWrapper = ({ analystReportData }) => {
  console.log(analystReportData);
  if (!analystReportData) return null;
  return (
    <StyledWrapper analystReportData={analystReportData}>
      <AnalystReportBodyReportContent analystReportData={analystReportData} />
      <AnalystReportBodyAgree />
      <AnalystReportBodyComment
        analystReportId={analystReportData.ANALYST_REPORT_ID}
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 60px;
  padding: 70px 20px 100px 20px;
  height: 100%;
  overflow-y: auto;
`;

export default AnalystReportBodyWrapper;
