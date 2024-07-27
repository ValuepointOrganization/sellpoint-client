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
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        alignSelf: "stretch",
      }}
    >
      <Flex
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <StyledSVG width="50" height="34" viewBox="0 0 26 18">
          <NvidiaLogo />
        </StyledSVG>
        <Flex
          direction="column"
          gap="6px"
          align="flex-start"
          style={{ flexGrow: 1 }}
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
          justifyContent="center"
          align="center"
          style={{
            width: "40px",
            padding: "4px 6px",
            flexShrink: 0,
            borderRadius: "8px",
            background: "rgba(255, 59, 48, 0.10)",
          }}
        >
          <Text color="#FF3B30" fontSize="12px" fontWeight={600}>
            {report.opinion}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ReportItem;
