import React from "react";
import styled from "styled-components";

import { Text } from "../../common/Index";

const ReportSummarySection = ({ reportSummary }) => {
  const summaryList = reportSummary.split("\n");
  return (
    <StyledList>
      {summaryList.map((report, index) => (
        <StyledListItem key={`Summary ${index}`}>
          <Text fontSize="14px" fontWeight="400" fontStyle="normal">
            {report}
          </Text>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default ReportSummarySection;

const StyledListItem = styled.li`
  font-size: 10px;
  padding-left: 1.5em;
  text-indent: -1.5em;
  margin-bottom: 14px;
`;

const StyledList = styled.ul`
  list-style-position: inside;
  padding-left: 0;
`;
