import React from "react";
import styled from "styled-components";

import { Text } from "../../common/Index";

const ReportSummarySection = () => {
  return (
    <StyledList>
      {dummySummary.map((report, index) => (
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

const dummySummary = [
  `세계적인 칩 부족 현상으로 인한 공급망 지연: Nvidia는 최근에 세계적인 칩 부족 현상에 직면하고 있으며, 이는 다양한 제품의 공급을 늦추고 있습니다. 이러한 지연으로 인해 수익성과 시장 점유율에 부정적인 영향을 미칠 수 있습니다.`,
  `산업 간 경쟁 격화: AMD 및 기타 경쟁 업체들이 점차적으로 시장 점유율을 늘리고 있어, 경쟁이 치열해지고 있습니다.`,
];

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
