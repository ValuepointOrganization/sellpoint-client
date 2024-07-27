import React from "react";
import { Flex, Text } from "../../common/Index";
import StyledSVG from "../../common/StyledSVG";
import { ReactComponent as NvidiaLogo } from "../../../assets/image/NvidiaLogo.svg";

const ReportItem = ({ report }) => {
  return (
    <Flex
      style={{
        display: "flex",
        padding: "12px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        alignSelf: "stretch",
      }}
    >
      <StyledSVG
        width="50"
        height="34"
        viewBox="0 0 26 18"
        style={{ marginRight: "20px" }}
      >
        <NvidiaLogo />
      </StyledSVG>
      <Flex
        direction="column"
        gap="6px"
        align="flex-start"
        style={{ marginRight: "16px", flexGrow: 1 }}
      >
        <Text color="#83838A" fontSize="12px" fontWeight={600}>
          {report.analystName} | {report.firmName}
        </Text>
        <Text
          color="#2C2C2C"
          fontSize="14px"
          fontWeight={600}
          style={{ width: "100%" }}
        >
          {report.reportTitle}
        </Text>
        <Text color="#BABABF" fontSize="12px" fontWeight={500}>
          {report.companyName}
        </Text>
      </Flex>
      <Flex
        justify="center"
        align="center"
        width="40px"
        height="22px"
        padding="4px 6px"
        borderRadius="8px"
        background="rgba(255, 59, 48, 0.1)"
      >
        <Text color="#FF3B30" fontSize="12px" fontWeight={600}>
          {report.opinion}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ReportItem;
