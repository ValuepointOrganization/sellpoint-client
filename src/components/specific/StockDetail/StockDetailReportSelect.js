import React from "react";
import { Flex, Text } from "../../common/Index";
import styled from "styled-components";

const Button = styled(Flex)`
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "1px solid #000" : "none")};
  padding: 14px 0px;
`;

const StockDetailReportSelect = ({ reportType, setReportType }) => {
  const handleButtonClick = (buttonType) => {
    setReportType(buttonType);
  };

  return (
    <Flex
      justify="space-between"
      alignItems="flex-start"
      style={{ width: "100%" }}
    >
      <Button
        justifyContent="center"
        alignItems="center"
        gap="10px"
        style={{ flex: "1 0 0" }}
        active={reportType === "analyst"}
        onClick={() => handleButtonClick("analyst")}
      >
        <Text fontSize="16px" lineHeight="160%">
          애널리스트
        </Text>
      </Button>
      <Button
        justifyContent="center"
        alignItems="center"
        gap="10px"
        style={{ flex: "1 0 0" }}
        active={reportType === "user"}
        onClick={() => handleButtonClick("user")}
      >
        <Text fontSize="16px" lineHeight="160%">
          유저
        </Text>
      </Button>
    </Flex>
  );
};

export default StockDetailReportSelect;
