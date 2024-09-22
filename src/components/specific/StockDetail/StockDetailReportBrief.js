import React from "react";
import styled from "styled-components";
import { Flex, Text } from "../../common/Index";
import ReportOpinion from "../ReportOpinion";
import VerticalDivider from "../VerticalDivider";

const StyledWrapper = styled(Flex)`
  width: 100%;
  padding-top: 20px;
`;

const StyledReportContainer = styled(Flex)`
  padding: 20px 0px;
  width: 100%;
`;

const ReportItem = ({ opinion, price }) => (
  <Flex
    gap="12px"
    justifyContent="center"
    alignItems="center"
    direction="column"
    style={{ width: "104px" }}
  >
    <ReportOpinion>{opinion}</ReportOpinion>
    <Text color="#BABABF" fontSize="12px" fontWeight="500">
      ${price}
    </Text>
  </Flex>
);

const StockDetailReportBrief = ({ reportType, reportNum }) => {
  const reportItems = [
    { opinion: "최저", price: "380.50" },
    { opinion: "평균", price: "380.50" },
    { opinion: "최고", price: "380.50" },
  ];

  const reportTitle =
    reportType === "analyst" ? "애널리스트 리포트" : "유저 리포트";

  return (
    <StyledWrapper
      gap="10px"
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Text fontSize="16px" lineHeight="160%">
        {reportTitle} ({reportNum})
      </Text>
      <StyledReportContainer gap="10px" alignItems="center">
        {reportItems.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <VerticalDivider />}
            <ReportItem opinion={item.opinion} price={item.price} />
          </React.Fragment>
        ))}
      </StyledReportContainer>
    </StyledWrapper>
  );
};

export default StockDetailReportBrief;
