import React from "react";
import { Flex, Text } from "../../common/Index";

import ReportOpinion from "../ReportOpinion";
import VerticalDivider from "../VerticalDivider";
const StockDetailReportBrief = () => {
  return (
    <Flex
      gap="10px"
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      style={{ width: "100%", paddingTop: "20px" }}
    >
      <Text fontSize="16px" lineHeight="160%">
        애널리스트 리포트 (160)
      </Text>
      <Flex
        gap="10px"
        alignItems="center"
        style={{ padding: "20px 0px", width: "100%" }}
      >
        <Flex
          gap="12px"
          justifyContent="center"
          alignItems="center"
          direction="column"
          style={{ width: "104px" }}
        >
          <ReportOpinion>최저</ReportOpinion>
          <Text color="#BABABF" fontSize="12px" fontWeight="500">
            $380.50
          </Text>
        </Flex>
        <VerticalDivider />
        <Flex
          gap="12px"
          justifyContent="center"
          alignItems="center"
          direction="column"
          style={{ width: "104px" }}
        >
          <ReportOpinion>평균</ReportOpinion>
          <Text color="#BABABF" fontSize="12px" fontWeight="500">
            $380.50
          </Text>
        </Flex>
        <VerticalDivider />
        <Flex
          gap="12px"
          justifyContent="center"
          alignItems="center"
          direction="column"
          style={{ width: "104px" }}
        >
          <ReportOpinion>최고</ReportOpinion>
          <Text color="#BABABF" fontSize="12px" fontWeight="500">
            $380.50
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StockDetailReportBrief;
