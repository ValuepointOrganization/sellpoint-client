import React from "react";
import { styled } from "styled-components";
import ReportBox from "./ReportBox";

const ScrollableReportList = ({ reports, analystName, analystCompany }) => {
  return (
    <ScrollContainer>
      {reports.map((report, index) => (
        <ReportBox
          key={index}
          report={report}
          analystName={analystName}
          analystCompany={analystCompany}
        />
      ))}
    </ScrollContainer>
  );
};

export default ScrollableReportList;

const ScrollContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  width: 100%;
`;
