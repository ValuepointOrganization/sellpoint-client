import React from "react";
import { styled } from "styled-components";
import ReportBox from "./ReportBox";

const ScrollableReportList = ({ reports }) => {
  return (
    <ScrollContainer>
      {reports.map((report, index) => (
        <ReportBox key={index} report={report} />
      ))}
    </ScrollContainer>
  );
};

export default ScrollableReportList;

const ScrollContainer = styled.div`
  max-height: 400px; // Adjust this value as needed
  overflow-y: auto;
  width: 100%;
`;
